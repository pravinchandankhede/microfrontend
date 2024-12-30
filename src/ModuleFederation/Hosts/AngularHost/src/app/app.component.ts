import { Component } from '@angular/core';
import { CustomRemoteConfig } from './models/config';
import { ManifestService } from './services/manifest.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'AngularHost';

    remotes: CustomRemoteConfig[] = [];

    constructor(
        private readonly manifestService: ManifestService) {

    }
    async ngOnInit(): Promise<void> {
        this.initialize();
    }

    private async initialize() {
        this.remotes = await this.manifestService.configureRoutes();        
    }
}
