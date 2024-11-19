import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TeamRoutingModule } from "./team-routing.module";
import { TeamComponent } from "./team.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeamRoutingModule,
    RouterModule
    //SharedModule,
    //TreeModule,
    //TreeTableModule
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }
