const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    output: {
        publicPath: "http://localhost:4201/",
        uniqueName: "remoteApp",
    },
    optimization: {
        runtimeChunk: false,
    },
    resolve: {
        alias: {
            ...require('module').builtinModules.reduce((acc, name) => {
                acc[name] = false;
                return acc;
            }, {}),
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "remoteApp",
            filename: "remoteEntry.js",
            exposes: {
                './ButtonModule': './src/app/button/button.module.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"],
        }),
    ],
};
