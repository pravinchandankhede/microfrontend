import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { ManifestService } from './services/manifest.service';
import { AuthorizationInterceptor, LoggerService, SessionService } from '@pravinchandankhede/mfelibrary';
import { NotificationSharedService } from './modules/shared/notificationshared.service';
import { LookupService } from './services/lookup.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: 'MANIFEST_SERVICE',
            useClass: ManifestService
        },
        {
            provide: 'LOGGER_SERVICE',
            useClass: LoggerService
        },        
        {
            provide: 'NotificationSharedService',
            useClass: NotificationSharedService
        },
        {
            provide: 'LookupService',
            useClass: LookupService
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthorizationInterceptor,
            multi: true
        },
        {
            provide: 'SessionService',
            useClass: SessionService
        },
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
