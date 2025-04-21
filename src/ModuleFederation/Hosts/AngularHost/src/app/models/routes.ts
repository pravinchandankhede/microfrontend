import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CustomManifest } from './config';
import { APP_ROUTES } from '../app-routing.module';

export function buildRoutes(options: CustomManifest): Routes {

    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry = options[key];

        if (entry.type === 'module') {
            return {
                path: entry.routePath,
                loadChildren: () =>
                    loadRemoteModule({
                        type: 'manifest',
                        remoteName: key,
                        exposedModule: entry.exposedModule
                    })
                        .then(m => m[entry.ngModuleName])
            }
        } else {
            return {
                path: entry.routePath,
                loadComponent: () =>
                    loadRemoteModule({
                        //type: 'manifest',
                        //remoteName: key,
                        type: 'module',
                        remoteEntry: entry.remoteEntry,
                        exposedModule: entry.exposedModule
                    })
                        .then(m => m[entry.ngModuleName])
            }
        }
        
    });

    if (APP_ROUTES.length > 0) {
        //APP_ROUTES[0].children = [...(APP_ROUTES[0].children || []), ...lazyRoutes];

        const children = APP_ROUTES[0].children || [];
        const updatedChildren = [
            children[0], // child 1
            ...lazyRoutes, // insert lazyRoutes here
            ...children.slice(1) // remaining children starting from child 2
        ];
        APP_ROUTES[0].children = updatedChildren;
    }

    return APP_ROUTES;
}
