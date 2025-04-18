import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostComponent } from './cost.component';

const routes: Routes = [
  { path: '', component: CostComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class CostRoutingModule { }
