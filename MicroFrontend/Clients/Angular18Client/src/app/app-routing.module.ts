import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './modules/team/team.component';

const routes: Routes = [
  {
    path: 'app',
    component: TeamComponent,
    //canActivate: true,
    resolve: {},
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/team/team.module')
          .then(mod => mod.TeamModule)
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
