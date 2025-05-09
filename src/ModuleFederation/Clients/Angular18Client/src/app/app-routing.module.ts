import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'app',
        resolve: {},
        children: [
            {
                path: 'team2',
                loadChildren: () => import('./modules/team/team.module')
                    .then(mod => mod.TeamModule)
            },
            {
                path: 'staff',
                loadChildren: () => import('./modules/staff/staff.module')
                    .then(mod => mod.StaffModule)
            },
            {
                path: 'role',
                loadChildren: () => import('./modules/role/role.module')
                    .then(mod => mod.RoleModule)
            },
            {
                path: 'cost',
                loadChildren: () => import('./modules/cost/cost.module')
                    .then(mod => mod.CostModule)
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
