const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
  // envVars passed from package.json file
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}`);
  const config = merge(commonConfig, envConfig);
  return config;
};
