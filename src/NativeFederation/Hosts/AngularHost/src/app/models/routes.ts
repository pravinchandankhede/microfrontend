import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { CustomRemoteConfig } from './config';
import { APP_ROUTES } from '../app-routing.module';

export function buildRoutes(options: CustomRemoteConfig[]): Routes {
    
    const lazyRoutes: Routes = options.map(entry => ({
        path: entry.routePath,
        loadChildren: () =>
            loadRemoteModule({
                // type: 'manifest',
                remoteName: entry.name,
                exposedModule: entry.exposedModule
            }).then(m => m[entry.ngModuleName])
    }));

    if (APP_ROUTES.length > 0) {
        APP_ROUTES[0].children = [...(APP_ROUTES[0].children || []), ...lazyRoutes];
    }

    return APP_ROUTES;
}
