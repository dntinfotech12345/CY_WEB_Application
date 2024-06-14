class Actions {
    // Click on an element using a selector
    click(selector) {
      cy.get(selector).click();
    }
  
    // Click on an element using an XPath
    clickByXpath(xpath) {
      cy.xpath(xpath).click();
    }
  
    // Type text into an input field
    type(selector, text) {
      cy.get(selector).type(text);
    }
  
    // Type text into an input field using XPath
    typeByXpath(xpath, text) {
      cy.xpath(xpath).type(text);
    }
  
    // Select a value from a dropdown
    select(selector, value) {
      cy.get(selector).select(value);
    }
  
    // Select a value from a dropdown using XPath
    selectByXpath(xpath, value) {
      cy.xpath(xpath).select(value);
    }
  
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
  
    // Scroll to an element
    scrollToElement(selector) {
      cy.get(selector).scrollIntoView();
    }
  
    // Scroll to an element using XPath
    scrollToElementByXpath(xpath) {
      cy.xpath(xpath).scrollIntoView();
    }
  
    // Hover over an element
    hover(selector) {
      cy.get(selector).trigger('mouseover');
    }
  
    // Hover over an element using XPath
    hoverByXpath(xpath) {
      cy.xpath(xpath).trigger('mouseover');
    }
  
    // Check a checkbox
    check(selector) {
      cy.get(selector).check();
    }
  
    // Check a checkbox using XPath
    checkByXpath(xpath) {
      cy.xpath(xpath).check();
    }
  
    // Uncheck a checkbox
    uncheck(selector) {
      cy.get(selector).uncheck();
    }
  
    // Uncheck a checkbox using XPath
    uncheckByXpath(xpath) {
      cy.xpath(xpath).uncheck();
    }
  
    // Upload a file
    uploadFile(selector, filePath) {
      cy.get(selector).attachFile(filePath);
    }
  
    // Wait for an element to be visible
    waitForVisible(selector, timeout = 10000) {
      cy.get(selector, { timeout }).should('be.visible');
    }
  
    // Wait for an element to be visible using XPath
    waitForVisibleByXpath(xpath, timeout = 10000) {
      cy.xpath(xpath, { timeout }).should('be.visible');
    }
  }
  
  export default new Actions();
  