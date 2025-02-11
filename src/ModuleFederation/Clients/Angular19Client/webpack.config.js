const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'Angular19Client',

    exposes: {
        './Component': './src/app/contact-details/contact-details.component.ts',
        './Component': './src/app/staff/staff.component.ts'        
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        '@pravinchandankhede/mfelibrary': { singleton: false, strictVersion: false, requiredVersion: 'auto' }
    },
});
