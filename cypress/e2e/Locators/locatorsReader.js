// cypress/support/locatorReader.js
import locators from '../Locators/locators.json';

class LocatorReader {
  constructor(locators) {
    this.locators = locators;
  }

  getLocator(page, element) {
    return this.locators[page][element];
  }
}

const locatorReader = new LocatorReader(locators);
export default locatorReader;
