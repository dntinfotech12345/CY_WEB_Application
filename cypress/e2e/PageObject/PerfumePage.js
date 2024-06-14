// cypress/support/pages/class PerfumePage.js
import locatorReader from "../Locators/locatorsReader";
class PerfumePage {
  constructor(page, Locators) {
    this.accept_all = locatorReader.getLocator("PerfumePage", "accept_all");
    this.click_on_perfume = locatorReader.getLocator("PerfumePage", "click_on_perfume");
    this.scroll_on_headline = locatorReader.getLocator("PerfumePage", "scroll_on_headline");
    this.select_dropdown_value = locatorReader.getLocator("PerfumePage", "select_dropdown_value");
    this.validate_number_filtered_products = locatorReader.getLocator("PerfumePage", "validate_number_filtered_products");
    this.verify_presence_filtered_products = locatorReader.getLocator("PerfumePage", "verify_presence_filtered_products");
    this.drop_down_name = locatorReader.getLocator("PerfumePage", "drop_down_name");
    this.filter_text = locatorReader.getLocator("PerfumePage", "filter_text");
    this.filter_text = locatorReader.getLocator("PerfumePage", "filter_text");
  }
  async acceptAllCokise() {
    cy.xpath(this.accept_all).should("be.visible").then((isVisible) => {
      if (isVisible) {
        cy.xpath(this.accept_all).click();
        cy.log(`<============It is clicked sucessfully =======>`);
      }
      else {
        // If it is not visible, log a message indicating that it was not found
        cy.log("Accept all cookies dropdown is not visible. Skipping the action...");
      }
    })
  }

  async clickOnPerfume() {
    cy.xpath(this.click_on_perfume, { timeout: 30000 }).should("be.visible").click();
    cy.log(`<============Perfume Page is clicked =======>`);
  }

  async verifyPerfumePage(url) {
    cy.url().should("eq", url);
    cy.log(`<============matched url =======>`);
  }

  async verifyDropdownOption() {
    cy.xpath(this.drop_down_name).each(($el, index, $list) => {
      cy.log($el.text());
    });
  }

  async clickOnHighlightDropdown(drop_down_name ) {
    cy.xpath(this.scroll_on_headline).should("be.visible").then(($headline) => {
      cy.wrap($headline).scrollIntoView().should("be.visible");
    });
    cy.xpath(this.drop_down_name).contains(drop_down_name, { matchCase: false }).click();
  }

  async clickOnSaleOption(dropdown_select) {
    cy.xpath(this.select_dropdown_value).contains(dropdown_select).click();
  }

  async verifyFilterIsApplied() {
    //chai lib to assert
    cy.xpath(this.filter_text)
      .should("be.visible", { timeout: 30000 });
  }
}

export default PerfumePage;