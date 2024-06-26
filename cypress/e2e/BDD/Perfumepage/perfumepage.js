import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PerfumePage from '../../PageObject/PerfumePage';
import { usecuredUrlOpen } from '../../../support/unsecuredUrlOpen';

const perfumePage = new PerfumePage();
let fixtureData; 
before(() => {
  // Load fixture data before all tests
  cy.fixture('perfumePage.json').then((data) => {
    fixtureData = data;
  });
});

Given('I am on the home page', () => {
  
  usecuredUrlOpen(Cypress.env('url'));
  perfumePage.acceptAllCokise();
});
 
When('I click on perfume page', () => {
  perfumePage.clickOnPerfume();
});
 
Then('I am on the perfume page', () => {
  perfumePage.verifyPerfumePage(fixtureData.perfume_page_url);
});
 
Then('All option of dropdown is displayed', () => {
  perfumePage.verifyDropdownOption();
});
 
When('I click on the highlight dropdown', () => {
  perfumePage.clickOnHighlightDropdown(fixtureData.drop_down_name);
});
 
When('I click on SALE option and verify the number of product', () => {
  perfumePage.clickOnSaleOption(fixtureData.dropdown_select);
});

Then('Verify the sale filter is applied', () => {
  perfumePage.verifyFilterIsApplied();
});