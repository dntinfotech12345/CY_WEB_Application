// cypress/support/pages/loginPage.js
import locatorReader from '../Locators/locatorsReader';
import assertions from '../../support/assertions';
import actions from '../../support/action';
class LoginPage {

  constructor() {
    this.userEmailLocator = locatorReader.getLocator('LoginPage', 'userEmail');
    this.userPassLocator = locatorReader.getLocator('LoginPage', 'userPass');
    this.submitButton = locatorReader.getLocator('LoginPage', 'submitButton');
    this.errorMessage = locatorReader.getLocator('LoginPage', 'errorMessage');
    this.successMessage = locatorReader.getLocator('LoginPage', 'successMessage');
  }

  enterEmail(email) {
    actions.type(this.userEmailLocator, email);
  }

  enterPassword(password) {
    actions.type(this.userPassLocator, password);
  }

  clickLogin() {
    actions.click(this.submitButton);
  }

  verifyLoginText(message) {
    assertions.verifyText(this.errorMessage, message);

  }

  verifySuccessfulLoginText(message) {
    assertions.verifyText(this.successMessage, message);

  }

}

export default LoginPage;
