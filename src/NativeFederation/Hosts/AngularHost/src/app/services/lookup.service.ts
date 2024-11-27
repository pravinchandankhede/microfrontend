import { Injectable } from '@angular/core';
import { PluginOptions } from '../models/plugin.model';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOptions[]> {
        return Promise.resolve([
            {
                //type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './RoleModuleComponent',

                displayName: 'RoleModule',
                componentName: 'RoleComponent'
            }            
        ] as PluginOptions[]);
    }
}
