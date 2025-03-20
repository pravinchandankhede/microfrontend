import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrap } from '@angular-architects/module-federation-tools';

if (environment.production) {
    enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule, {
//  ngZoneEventCoalescing: true
//})
//  .catch(err => console.error(err));


bootstrap(AppModule, {
    production: environment.production,
    //appType: 'microfrontend'  // for micro frontend
    appType: 'shell',      // for shell
});
