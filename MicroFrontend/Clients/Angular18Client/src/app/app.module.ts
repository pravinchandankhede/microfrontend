import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from 'mfelibrary';
import { NotificationSharedService } from './modules/shared/notificationshared.service';

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
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
