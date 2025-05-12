const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureCypress(on, config);
      return config;
    },
    baseUrlAutomationInsurance: 'https://sampleapp.tricentis.com/101/app.php',
    specPattern: "**/*.feature",
    stepDefinitions: "cypress/support/step_definitions"
  },
  defaultCommandTimeout: 4000,
});
