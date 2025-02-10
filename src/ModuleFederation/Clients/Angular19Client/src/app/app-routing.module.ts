import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'app',
        resolve: {},
        children: [
            {
                path: 'contact',
                loadComponent: () => import('./contact-details/contact-details.component').then(m => m.ContactDetailsComponent)
                //component: ContactDetailsComponent
            },
            {
                path: '', pathMatch: 'full', redirectTo: 'app',
                
            },
            {
                path: '**', pathMatch: 'full', redirectTo: 'app',
            },
        ]
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'app',
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'app',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
