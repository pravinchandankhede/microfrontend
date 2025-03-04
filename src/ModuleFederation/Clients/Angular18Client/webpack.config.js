const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'Angular18Client',

    exposes: {
        './Component': './src/app/app.component.ts',
        './Module': './src/app/modules/team/team.module.ts',
        './StaffModule': './src/app/modules/staff/staff.module.ts',
        './RoleModule': './src/app/modules/role/role.module.ts',
        './RoleModuleComponent': './src/app/modules/role/role.component.ts'
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        '@pravinchandankhede/mfelibrary': { singleton: false, strictVersion: false, requiredVersion: 'auto' }
    },
});
