const { shareAll, shared, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'Angular18Client',

    exposes: {
        //'./Component': './src/app/app.component.ts',
        //'./Module': './src/app/modules/team/team.module.ts',
        //'./StaffModule': './src/app/modules/staff/staff.module.ts',
        //'./RoleModule': './src/app/modules/role/role.module.ts',
        //'./RoleModuleComponent': './src/app/modules/role/role.component.ts',
        './web-components': './src/bootstrap.ts',
        './team-components': './src/app/modules/team/team.module.ts',
        './cost-components': './src/app/modules/cost/cost.module.ts'
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
    },
});
