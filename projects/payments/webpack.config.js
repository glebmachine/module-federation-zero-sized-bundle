const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'), [
    '@namespace/auth'
  ]);

const descriptors = sharedMappings.getDescriptors();
const plugins = sharedMappings.getPlugin();

Object.values(descriptors).forEach(descr => {
  descr.eager = true;
  descr.singleton = true;
  descr.strictVersion = true;
});

module.exports = {
  stats: {
    logging: true,
  },
  output: {
    uniqueName: "payments"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "payments",
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/payments/src/lib/payments.module.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        ...descriptors
      }
    }),
    plugins,
  ],
};
