// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

//cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
// @ts-ignore
require('cypress-xpath');

// cypress/support/index.js

// Import the sendEmailAfterTests function
// cypress/support/index.js

// cypress/plugins/index.js

const { sendEmailAfterTests } = require('../support/email');

module.exports = (on, config) => {
    on('task', {
        async sendEmailAfterTests() {
            await sendEmailAfterTests();
            return null;
        }
    });
};


// const { sendEmailAfterTests } = require('../support/email');

// after(() => {
//     // Wrap the email sending function call in a Cypress task
//     cy.task('sendEmailAfterTests');
// });

