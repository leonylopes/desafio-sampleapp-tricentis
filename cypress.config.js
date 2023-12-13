const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrlAutomationInsurance: 'https://sampleapp.tricentis.com/101/app.php',
    specPattern: "**/*.feature",
    stepDefinitions: "cypress/support/step_definitions"
  },
  defaultCommandTimeout: 4000,
});
