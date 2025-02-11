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
                loadComponent: () => import('./staff/staff.component').then(m => m.StaffComponent)                
            },
            {
                path: 'contact/:id', // Add this route for contact details
                component: ContactDetailsComponent
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
