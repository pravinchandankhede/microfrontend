import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './core/shell.component';

export const APP_ROUTES: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    resolve: {},
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module')
          .then(mod => mod.HomeModule)
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
