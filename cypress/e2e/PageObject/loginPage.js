// cypress/support/pages/loginPage.js
import locatorReader from '../Locators/locatorsReader';

class LoginPage {
  constructor() {
    this.userEmailLocator = locatorReader.getLocator('LoginPage', 'userEmail');
    this.userPassLocator = locatorReader.getLocator('LoginPage', 'userPass');
    this.loginButtonLocator = locatorReader.getLocator('LoginPage', 'loginButton');
  }

  enterEmail(email) {
    cy.get(this.userEmailLocator).type(email);
  }

  enterPassword(password) {
    cy.get(this.userPassLocator).type(password);
  }

  clickLogin() {
    cy.get(this.loginButtonLocator).click();
  }
}

export default LoginPage;
