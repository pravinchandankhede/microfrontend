const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'Angular18Client',

  exposes: {
    './Component': './src/app/app.component.ts',
    './Module': './src/app/modules/team/team.module.ts',
    './StaffModule': './src/app/modules/staff/staff.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
