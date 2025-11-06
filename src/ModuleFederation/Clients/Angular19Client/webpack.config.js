const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'Angular19Client',

    exposes: {
        './ContactDetailsComponent': './src/app/contact-details/contact-details.component.ts',
        './StaffComponent': './src/app/staff/staff.component.ts',
        //'./AppRoute': './src/app/app-routing.module.ts',
        //'./web-components': './src/bootstrap.ts',
    },

    shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "@angular/platform-browser": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "@angular/platform-browser-dynamic": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "@angular/compiler": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "@angular/animations": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        "rxjs": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
        '@pravinchandankhede/mfelibrary': { singleton: true, strictVersion: false, requiredVersion: 'auto' }
    }
});
