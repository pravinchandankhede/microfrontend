import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomRemoteConfig } from '../models/config';
import { ManifestService } from '../services/manifest.service';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { PluginOptions } from '../models/plugin.model';
import { LookupService } from '../services/lookup.service';

@Component({
    selector: 'shell',
    templateUrl: './shell.component.html'
})
export class ShellComponent {
    remotes: CustomRemoteConfig[] = [];
    showFlyout = false;
    inputText = '';
    options!: PluginOptions;
    plugins: PluginOptions[] = [];

    @ViewChild('roleContainer', { read: ViewContainerRef, static: false }) roleContainer!: ViewContainerRef;

    constructor(
        private readonly manifestService: ManifestService,        
        private readonly lookupService: LookupService) {
    }

    async ngOnInit(): Promise<void> {
        this.remotes = await this.manifestService.configureRoutes();
        if (this.lookupService) {
            this.plugins = await this.lookupService.lookup();            
        }
        else {
            console.log("lookup service is null");
        }

        this.options = this.plugins[0];
    }    

    async openFlyout(option: string) {
        console.log(`Selected option: ${option}`);
        this.showFlyout = true;

        try {
            const Component = await loadRemoteModule(this.options)
                .then(m => m[this.options.componentName])
                .catch(err => {
                    console.error('Failed to load component from module', err);
                    return null;
                });

            this.roleContainer.createComponent(Component);

        } catch (err) {
            console.error('Failed to load module', err);
        }
    }

    closeFlyout() {
        this.showFlyout = false;
    }
}
