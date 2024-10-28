import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { ManifestService } from './services/manifest.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CommonModule
  ],
  providers: [ManifestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
