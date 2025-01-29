import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationInterceptor, LoggerService, SessionService } from '@pravinchandankhede/mfelibrary';
import { NotificationSharedService } from './modules/shared/notificationshared.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: 'LOGGER_SERVICE',
            useClass: LoggerService            
        },        
        {
            provide: 'NotificationSharedService',
            useClass: NotificationSharedService
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
