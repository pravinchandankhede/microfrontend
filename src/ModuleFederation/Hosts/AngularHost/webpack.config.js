const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    remotes: {
        "mfe1": "http://localhost:4202/remoteEntry.js",
        //"Angular18Client": "http://localhost:4201/remoteEntry.js",
    },

    shared: {
        ...shareAll({
            singleton: false,
            strictVersion: false,
            requiredVersion: 'auto'
        }),
        '@pravinchandankhede/mfelibrary': {
            singleton: false,
            strictVersion: false,
            requiredVersion: '0.0.5-alpha8',
        },
    },

    //shared: {
    //    '@angular/core': { singleton: false, strictVersion: true, requiredVersion: 'auto' },
    //    '@angular/common': { singleton: false, strictVersion: true, requiredVersion: 'auto' },
    //    '@angular/router': { singleton: false, strictVersion: true, requiredVersion: 'auto' },
    //    '@pravinchandankhede/mfelibrary': { singleton: false, strictVersion: false, requiredVersion: '0.0.5-alpha8' }
    //}

});
