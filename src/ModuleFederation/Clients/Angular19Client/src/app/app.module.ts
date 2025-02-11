import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';

@NgModule({
    declarations: [
        AppComponent,
        StaffComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
