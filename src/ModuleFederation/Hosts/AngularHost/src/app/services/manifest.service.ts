import { getManifest, loadManifest } from '@angular-architects/module-federation';
import { CustomManifest, CustomRemoteConfig } from '../models/config';
import { buildRoutes } from '../models/routes';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ErrorEventData, EventBus, ErrorEvent } from '@pravinchandankhede/mfelibrary';
import { environment } from '../../environments/environment';

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

    //public async loadManifestConfig(): Promise<void> {
    //    let url = environment.production ? "/assets/config.prod.json" : "/assets/config.json";

    //    await loadManifest(url)
    //        .catch((error: Error) => {
    //            this.eventBus.emit(new ErrorEvent(new ErrorEventData(error.name, error.message)));
    //        });

    //    this.manifestLoaded = true;
    //}

    public async loadManifestConfig(): Promise<void> {
        let url = environment.production ? "/assets/config.prod.json" : "/assets/config.json";

        try {
            await loadManifest(url);
            this.manifestLoaded = true;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            const errorName = error instanceof Error ? error.name : 'UnknownError';
            this.eventBus.emit(new ErrorEvent(new ErrorEventData(errorName, errorMessage)));
            this.manifestLoaded = false; // Ensure manifestLoaded is false if loading fails
        }
    }

    //public async configureRoutes(): Promise<CustomRemoteConfig[]> {
    //    if (!this.manifestLoaded) {
    //        await this.loadManifestConfig();

    //        const manifest = getManifest<CustomManifest>();
    //        const routes = buildRoutes(manifest);
    //        this.router.resetConfig(routes);
    //        this.remotes = Object.values(manifest);
    //    }

    //    return this.remotes;
    //}

    public async configureRoutes(): Promise<CustomRemoteConfig[]> {
        if (!this.manifestLoaded) {
            await this.loadManifestConfig();
        }

        if (this.manifestLoaded) {
            const manifest = getManifest<CustomManifest>();

            if (!manifest) {
                this.eventBus.emit(new ErrorEvent(new ErrorEventData('ManifestError', 'Manifest is undefined or invalid')));
                return [];
            }

            const routes = buildRoutes(manifest);
            this.router.resetConfig(routes);
            this.remotes = Object.values(manifest);
        }

        return this.remotes;
    }
}
