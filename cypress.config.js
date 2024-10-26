const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  //defaultCommandTimeout: 20000, 
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
  },
});
