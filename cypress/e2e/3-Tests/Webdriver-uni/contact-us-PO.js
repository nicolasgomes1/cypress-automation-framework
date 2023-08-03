/// <reference types="Cypress" />
import HomePage_PO from "../../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../../support/pageObjects/webdriver-uni/Contact_Us_PO";



describe("Test Contact us form via WebdriverUni", () => {
  Cypress.config('defaultCommandTimeout', 20000);
  const homepage_PO = new HomePage_PO();
  const contact_Us_Po = new Contact_Us_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homepage_PO.visitHomepage();
    // cy.wait(3000);
    // cy.pause()
    homepage_PO.clickOn_ContactUs_Button();
  });

  // Test with POM Page Object Model
  it("Should be able to submit a successful submission via contact us form custom command PO", () => {
    contact_Us_Po.ContactForm_Submission(data.first_name,data.last_name,data.email,"my input is fine","h1","Thank You for your Message!");  
  });

  //failed test case
  it("Should be able to submit a successful submission via contact us form custom command PO", () => {
    // contact_Us_Po.ContactForm_Submission(data.first_name,data.last_name,data.email,"my input is fine","h1","Thank You for your Message!555");  
  });
});
