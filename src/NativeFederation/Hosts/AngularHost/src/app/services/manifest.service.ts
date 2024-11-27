import {  CustomRemoteConfig } from '../models/config';
import { buildRoutes } from '../models/routes';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { initFederation } from '@angular-architects/native-federation';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ManifestService {
    remotes: CustomRemoteConfig[] = [];
    manifestLoaded: boolean = false;    
    configs: CustomRemoteConfig[] = [];

    constructor(private readonly router: Router,
                private readonly httpClient: HttpClient) {

    }

    public async loadManifestConfig(): Promise<CustomRemoteConfig[]> {        
        const data = await this.httpClient.get<CustomRemoteConfig[]>('/assets/config.json').toPromise();
        this.manifestLoaded = true;

        return data!.map(item => ({
            remoteEntry: item.remoteEntry,
            exposedModule: item.exposedModule,
            displayName: item.displayName,
            routePath: item.routePath,
            ngModuleName: item.ngModuleName,
            name : item.name
        }));        
    }
    
    public async configureRoutes(): Promise<CustomRemoteConfig[]> {
        
        if (!this.manifestLoaded) {
           this.configs = await this.loadManifestConfig();
        }

        const routes = buildRoutes(this.configs);
        this.router.resetConfig(routes);
        this.remotes = Object.values(this.configs);

        return this.remotes;
    }
}
