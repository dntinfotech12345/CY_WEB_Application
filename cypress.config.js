const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.

  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 60000,  
   reporter: 'cypress-mochawesome-reporter',
  env:{
    url: 'https://www.douglas.de/de',
    EMAIL_USER: "roshanmorkhade96@gmail.com",
    EMAIL_PASS: "ymoy mgti lvzg teyx",
    TO_EMAIL: "kumarvikasg786@gmail.com",
    SCENARIO_NAMES: ["Scenario 1", "Scenario 2"],
    EMAIL_BODY: "Please find the attached test results.",
    EMAIL_REGARDS: "Best regards, QA Team"

  },
  projectId: "v51nm9",
  retries: {
    runMode: 1,
    },
  e2e: {
   
    setupNodeEvents,
    // implement node event listeners here,
    specPattern: 'cypress/e2e/BDD/*.feature',
    // specPattern: 'cypress run --record --key 838cf313-94b9-4464-918f-d6f1d2308c57 --spec cypress/e2e/BDD/*.feature',
    // specPattern: 'cypress run --record --key 838cf313-94b9-4464-918f-d6f1d2308c57 --spec "cypress/e2e/BDD/Perumepage.feature" --headed --browser chrome'
    //838cf313-94b9-4464-918f-d6f1d2308c57
    supportFile: 'cypress/support/e2e.js'
  }, 
  
})
