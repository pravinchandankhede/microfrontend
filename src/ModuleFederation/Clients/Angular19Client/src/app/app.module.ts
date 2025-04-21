import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule
    ],
    providers: [],
    //bootstrap: [AppComponent],   

})
export class AppModule implements DoBootstrap {

    constructor(private injector: Injector) {

    }

    ngDoBootstrap() {
        const ce = createCustomElement(AppComponent, { injector: this.injector });
        customElements.define('app-ang19', ce);
    }
}
