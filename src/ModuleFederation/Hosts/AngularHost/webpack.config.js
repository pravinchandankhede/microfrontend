const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    remotes: {
        //  "mfe1": "http://localhost:4201/remoteEntry.js",
        //"Angular18Client": "http://localhost:4201/remoteEntry.js",
    },

    shared: {
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: 'auto'
        }),
        '@pravinchandankhede/mfelibrary': {
            singleton: true,
            strictVersion: false,
            requiredVersion: '0.0.5-alpha8',
        },
    },
});
