const packageJson = require('../../package.json');

export const environment = {
  googleMapsApiKey: '',
  envName: 'STAGING',
  production: true,
  host: 'https://staging.domain.com',
  api: 'api/v1',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
