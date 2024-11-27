const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

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
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'jest-editor-support'
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
