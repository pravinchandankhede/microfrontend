import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NotificationSharedService } from "./notificationshared.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    //SharedModule,
    //TreeModule,
    //TreeTableModule
  ],
  providers:[NotificationSharedService]
})
export class SharedModule { }
