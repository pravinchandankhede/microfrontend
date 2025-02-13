const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'Angular19Client',

    exposes: {
        //'./ContactDetailsComponent': './src/app/contact-details/contact-details.component.ts',
        //'./StaffComponent': './src/app/staff/staff.component.ts',
        './AppRoute': './src/app/app-routing.module.ts'
    },

    shared: {
        ...shareAll({ singleton: false, strictVersion: false, requiredVersion: 'auto' }),
        
        '@pravinchandankhede/mfelibrary': { singleton: false, strictVersion: false, requiredVersion: '0.0.5-alpha8' }
    },
});
