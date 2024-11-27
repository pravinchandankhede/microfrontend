import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RoleRoutingModule } from "./role-routing.module";
import { RoleComponent } from "./role.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoleRoutingModule,
    RouterModule
    //SharedModule,
    //TreeModule,
    //TreeTableModule
  ],
  //declarations: [RoleComponent]
})
export class RoleModule { }
