import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './core/shell.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
    {
        path: 'app',
        component: ShellComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module')
                    .then(mod => mod.HomeModule)
            },
            {
                path: 'config',
                loadChildren: () => import('./modules/config/config.module')
                    .then(mod => mod.ConfigModule)
            },
            {
                //matcher: startsWith('angular'),
                path: 'angular',
                component: WebComponentWrapper,
                data: {
                    type : 'module',
                    remoteEntry: 'http://localhost:4201/remoteEntry.js',
                    //remoteName: 'react',
                    exposedModule: './web-components',
                    elementName: 'app-root'
                } as WebComponentWrapperOptions
            },
            {
                //matcher: startsWith('angular'),
                path: 'team2',
                component: WebComponentWrapper,
                data: {
                    type: 'module',
                    remoteEntry: 'http://localhost:4201/remoteEntry.js',
                    exposedModule: './team-components',
                    elementName: 'app-team'
                } as WebComponentWrapperOptions
            },
            {
                //matcher: startsWith('angular'),
                path: 'cost',
                component: WebComponentWrapper,
                data: {
                    type: 'module',
                    remoteEntry: 'http://localhost:4201/remoteEntry.js',
                    exposedModule: './cost-components',
                    elementName: 'app-cost'
                } as WebComponentWrapperOptions
            },
            {
                path: '', pathMatch: 'full', redirectTo: 'home'
            }
        ]
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'app/home',
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'app/home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
