import { Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list.component';

export const routes: Routes = [
  { path: 'teams', component: TeamListComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' }
];
