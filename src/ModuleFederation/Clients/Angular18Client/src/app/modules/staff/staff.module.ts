import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StaffRoutingModule } from "./staff-routing.module";
import { StaffComponent } from "./staff.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StaffRoutingModule,
    RouterModule,
    SharedModule

  ],
  declarations: [StaffComponent]
})
export class StaffModule { }
