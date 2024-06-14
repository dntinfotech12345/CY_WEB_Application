import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginpage from '../../PageObject/loginPage'

const loginPage = new loginpage();

Given('I navigate to the login page', () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});

When('I enter username {string}', (username) => {
  loginPage.enterEmail(username);
});

When('I enter password {string}', (password) => {
  loginPage.enterPassword(password);
});

When('I click the login button', () => {
  loginPage.clickLogin();
});

Then('I should see the message {string}', (message) => {
  loginPage.verifyLoginText(message);
});
Then('I should see login successful the message {string}', (message) => {
  loginPage.verifySuccessfulLoginText(message);
});

