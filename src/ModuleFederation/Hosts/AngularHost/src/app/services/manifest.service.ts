import { getManifest, loadManifest } from '@angular-architects/module-federation';
import { CustomManifest, CustomRemoteConfig } from '../models/config';
import { buildRoutes } from '../models/routes';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ErrorEventData, EventBus, ErrorEvent } from '@pravinchandankhede/mfelibrary';

@Injectable({
    providedIn: 'root'
})
export class ManifestService {
    remotes: CustomRemoteConfig[] = [];
    manifestLoaded: boolean = false;

    constructor(
        private readonly router: Router,
        private readonly eventBus: EventBus) {

    }

    public async loadManifestConfig(): Promise<void> {
        await loadManifest("/assets/config.json")
            .catch((error: Error) => {
                this.eventBus.emit(new ErrorEvent(new ErrorEventData(error.name, error.message)));
            });

        this.manifestLoaded = true;
    }

    public async configureRoutes(): Promise<CustomRemoteConfig[]> {
        if (!this.manifestLoaded) {
            await this.loadManifestConfig();

            const manifest = getManifest<CustomManifest>();
            const routes = buildRoutes(manifest);
            this.router.resetConfig(routes);
            this.remotes = Object.values(manifest);
        }

        return this.remotes;
    }
}
