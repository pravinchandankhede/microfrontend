import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './core/shell.component';

const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    //canActivate: true,
    resolve: {},
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module')
          .then(mod => mod.HomeModule)
      },
      {
        path: 'team',
        loadChildren: () => import('mfe1/Module')
          .then(mod => mod.TeamModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('mfe1/StaffModule')
          .then(mod => mod.StaffModule)
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
