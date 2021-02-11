// include path to resolve file path
const path = require('path')
// include whitelabel config
const appEnv = require('./env.json')
const whitelabelConfig = require('./whitelabel.config')
// check which brand config to use for SCSS Variables
const brandVariablesPath = whitelabelConfig[appEnv.VUE_APP_BRAND].scssVariables

// set webpack configuration
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // create alias for whitelabel SCSS variable files
        brandVariables: path.resolve(__dirname, brandVariablesPath)
      }
    }
  }
}
