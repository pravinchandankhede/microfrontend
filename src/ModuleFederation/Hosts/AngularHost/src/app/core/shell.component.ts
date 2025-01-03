import { Component, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomRemoteConfig } from '../models/config';
import { ManifestService } from '../services/manifest.service';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from '../models/plugin.model';
import { LookupService } from '../services/lookup.service';
import { ErrorEventData, EventBus, LoggerService, ThemeChangedEventData } from 'mfelibrary';
import { Subscription } from 'rxjs';

@Component({
    selector: 'shell',
    templateUrl: './shell.component.html'
})
export class ShellComponent implements OnDestroy {
    remotes: CustomRemoteConfig[] = [];
    showFlyout = false;
    inputText = '';
    options!: PluginOptions;
    plugins: PluginOptions[] = [];
    themeChangedSubscription: Subscription;
    errors: string[] = [];
    errorSubscription: Subscription;

    @ViewChild('roleContainer', { read: ViewContainerRef, static: false }) roleContainer!: ViewContainerRef;

    constructor(
        private readonly manifestService: ManifestService,
        private readonly lookupService: LookupService,
        private readonly eventBus: EventBus,
        private readonly loggerService: LoggerService) {
        loggerService.log("shell cons");

        this.themeChangedSubscription = this.eventBus.on<ThemeChangedEventData>('ThemeChangedEvent').subscribe((event: ThemeChangedEventData) => {
            loggerService.log(event.themeName); // Outputs the theme name
        });

        this.errorSubscription = this.eventBus.on<ErrorEventData>('ErrorEvent').subscribe((event: ErrorEventData) => {
            this.errors.push(event.errorMessage);
        })

        this.initialize();
    }
    
    private async initialize() {
        this.remotes = await this.manifestService.configureRoutes();
        if (this.lookupService) {
            this.plugins = await this.lookupService.lookup();
        } else {
            this.loggerService.log("lookup service is null");
        }

        this.options = this.plugins[0];
    }

    async openFlyout(option: string) {
        this.loggerService.log(`Selected option: ${option}`);
        this.showFlyout = true;

        try {
            const Component = await loadRemoteModule(this.options)
                .then(m => m[this.options.componentName])
                .catch(err => {
                    this.loggerService.log('Failed to load component from module' + err);
                    return null;
                });

            this.roleContainer.createComponent(Component);

        } catch (err) {
            this.loggerService.log('Failed to load module' + err);
        }
    }

    closeFlyout() {
        this.showFlyout = false;
    }

    async ngOnDestroy() {
        this.themeChangedSubscription.unsubscribe();
    }
}
