class Assertions {
    // Verify an element is visible
    verifyVisible(selector) {
      cy.get(selector).should('be.visible');
    }
  
    // Verify an element is visible using XPath
    verifyVisibleByXpath(xpath) {
      cy.xpath(xpath).should('be.visible');
    }
  
    // Verify an element contains specific text
    verifyText(selector, text) {
      cy.get(selector).should('contain.text', text);
    }
  
    // Verify an element contains specific text using XPath
    verifyTextByXpath(xpath, text) {
      cy.xpath(xpath).should('contain.text', text);
    }
  
    // Verify an element's value
    verifyValue(selector, value) {
      cy.get(selector).should('have.value', value);
    }
  
    // Verify an element's value using XPath
    verifyValueByXpath(xpath, value) {
      cy.xpath(xpath).should('have.value', value);
    }
  
    // Verify an element's attribute
    verifyAttribute(selector, attribute, value) {
      cy.get(selector).should('have.attr', attribute, value);
    }
  
    // Verify an element's attribute using XPath
    verifyAttributeByXpath(xpath, attribute, value) {
      cy.xpath(xpath).should('have.attr', attribute, value);
    }
  
    // Verify the URL is correct
    verifyUrl(url) {
      cy.url().should('eq', url);
    }
  
    // Verify an element is checked (for checkboxes/radio buttons)
    verifyChecked(selector) {
      cy.get(selector).should('be.checked');
    }
  
    // Verify an element is checked using XPath (for checkboxes/radio buttons)
    verifyCheckedByXpath(xpath) {
      cy.xpath(xpath).should('be.checked');
    }
  
    // Verify an element is not checked (for checkboxes/radio buttons)
    verifyNotChecked(selector) {
      cy.get(selector).should('not.be.checked');
    }
  
    // Verify an element is not checked using XPath (for checkboxes/radio buttons)
    verifyNotCheckedByXpath(xpath) {
      cy.xpath(xpath).should('not.be.checked');
    }
  
    // Verify an element is enabled
    verifyEnabled(selector) {
      cy.get(selector).should('not.be.disabled');
    }
  
    // Verify an element is enabled using XPath
    verifyEnabledByXpath(xpath) {
      cy.xpath(xpath).should('not.be.disabled');
    }
  
    // Verify an element is disabled
    verifyDisabled(selector) {
      cy.get(selector).should('be.disabled');
    }
  
    // Verify an element is disabled using XPath
    verifyDisabledByXpath(xpath) {
      cy.xpath(xpath).should('be.disabled');
    }
  
    // Verify the page title
    verifyTitle(title) {
      cy.title().should('eq', title);
    }
  
    // Verify an element is visible within a specific timeout
    waitForVisible(selector, timeout = 10000) {
      cy.get(selector, { timeout }).should('be.visible');
    }
  
    // Verify an element is visible within a specific timeout using XPath
    waitForVisibleByXpath(xpath, timeout = 10000) {
      cy.xpath(xpath, { timeout }).should('be.visible');
    }
  }
  
  export default new Assertions();
  