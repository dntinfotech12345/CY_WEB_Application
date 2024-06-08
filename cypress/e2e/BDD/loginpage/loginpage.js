// cypress/integration/step_definitions/loginSteps.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../PageObject/loginPage';

const loginPage = new LoginPage();

Given('I am on the login page', () => {
  cy.intercept('GET', '**', (req) => {
    req.headers['Accept'] = '';
    req.headers['User-Agent'] = 'CustomUserAgent/1.0';
  }).as('customRequest');
  cy.visit('https://www.douglas.de/de');
});

When('I login with username {string} and password {string}', (username, password) => {
  // loginPage.enterEmail(username);
  // loginPage.enterPassword(password);
  // loginPage.clickLogin();
});


Then('I should be redirected to the dashboard', () => {
  // cy.url().should('include', '/dashboard');
});
