//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';

//platformBrowserDynamic().bootstrapModule(AppModule, {
//  ngZoneEventCoalescing: true
//})
//  .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, HttpClientModule)
    ],
    //ngZoneEventCoalescing: true
}).catch(err => console.error(err));
