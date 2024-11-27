import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    resolve: {},
    children: [
      {
        path: 'team',
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
export class AppRoutingModule { }
