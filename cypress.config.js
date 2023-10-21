const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalStudio: true,
    baseUrl : 'https://ecommerce-playground.lambdatest.io'
  },
});
