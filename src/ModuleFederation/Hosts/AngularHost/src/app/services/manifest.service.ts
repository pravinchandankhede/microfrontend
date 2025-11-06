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
    private remotes: CustomRemoteConfig[] = [];
    private manifestLoaded: boolean = false;
    private readonly configPath = environment.production ? "/assets/config.prod.json" : "/assets/config.json";

    constructor(
        private readonly router: Router,
        private readonly eventBus: EventBus
    ) {}

    public async loadManifestConfig(): Promise<void> {
        try {
            await loadManifest(this.configPath);
            const manifest = getManifest<CustomManifest>();
            
            // Validate manifest
            if (!manifest || typeof manifest !== 'object') {
                throw new Error('Invalid manifest format');
            }

            // Validate each remote configuration
            Object.entries(manifest).forEach(([key, config]) => {
                if (!this.validateRemoteConfig(config as CustomRemoteConfig)) {
                    throw new Error(`Invalid configuration for remote "${key}"`);
                }
            });

            this.manifestLoaded = true;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error loading manifest';
            const errorName = error instanceof Error ? error.name : 'ManifestLoadError';
            this.eventBus.emit(new ErrorEvent(new ErrorEventData(errorName, errorMessage)));
            this.manifestLoaded = false;
            throw error; // Re-throw to handle in caller
        }
    }

    public async configureRoutes(): Promise<CustomRemoteConfig[]> {
        try {
            if (!this.manifestLoaded) {
                await this.loadManifestConfig();
            }

            const manifest = getManifest<CustomManifest>();
            if (!manifest) {
                throw new Error('Manifest not loaded or invalid');
            }

            const routes = buildRoutes(manifest);
            if (!routes || !Array.isArray(routes)) {
                throw new Error('Invalid routes configuration');
            }

            // Configure routes
            this.router.resetConfig(routes);
            
            // Update remotes
            this.remotes = Object.values(manifest);
            
            return this.remotes;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error configuring routes';
            const errorName = error instanceof Error ? error.name : 'RouteConfigError';
            this.eventBus.emit(new ErrorEvent(new ErrorEventData(errorName, errorMessage)));
            return [];
        }
    }

    private validateRemoteConfig(config: CustomRemoteConfig): boolean {
        return !!(
            config &&
            typeof config.remoteEntry === 'string' &&
            typeof config.exposedModule === 'string' &&
            typeof config.displayName === 'string' &&
            typeof config.routePath === 'string' &&
            typeof config.ngModuleName === 'string' &&
            typeof config.type === 'string'
        );
    }

    public getLoadedRemotes(): CustomRemoteConfig[] {
        return [...this.remotes];
    }

    public isManifestLoaded(): boolean {
        return this.manifestLoaded;
    }
}
