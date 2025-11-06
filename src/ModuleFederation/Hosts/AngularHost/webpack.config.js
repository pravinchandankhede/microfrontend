const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    remotes: {
        // Define remotes dynamically through the manifest instead of statically here
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
        "@pravinchandankhede/mfelibrary": { 
            singleton: true, 
            strictVersion: false, 
            requiredVersion: '0.0.5-alpha8'
        },
        ...shareAll({ 
            singleton: true, 
            strictVersion: false, 
            requiredVersion: 'auto'
        })
    }
    
    
});
