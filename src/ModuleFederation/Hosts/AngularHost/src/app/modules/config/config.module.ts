import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfigComponent } from "./config.component";
import { RouterModule } from "@angular/router";
import { ConfigRoutingModule } from "./config-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfigRoutingModule,
    RouterModule
    //SharedModule,
    //TreeModule,
    //TreeTableModule
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule { }
