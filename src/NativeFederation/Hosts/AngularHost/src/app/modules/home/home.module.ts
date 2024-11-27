import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    RouterModule
    //SharedModule,
    //TreeModule,
    //TreeTableModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
