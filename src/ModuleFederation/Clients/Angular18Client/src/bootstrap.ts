import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrap } from '@angular-architects/module-federation-tools';
import { environment } from './environments/environment';

//platformBrowserDynamic().bootstrapModule(AppModule, {
//  ngZoneEventCoalescing: true
//})
//  .catch(err => console.error(err));


bootstrap(AppModule, {
    production: environment.production,
    appType: 'microfrontend'  // for micro frontend
    // appType: 'shell',      // for shell
});
