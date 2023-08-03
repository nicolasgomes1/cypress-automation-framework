/// <reference types="Cypress" />

describe("Test Contact us form via WebdriverUni", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "Contact-Us");
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("my input is fine");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.screenshot();
  });

  // Test with custom commands
  it("Should be able to submit a successful submission via contact us form custom command", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "Contact-Us");

    cy.webdriverUni_COntactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "my input is fine",
      "h1",
      "Thank You for your Message!"
    );
    cy.screenshot();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get("textarea.feedback-input").type("my input is fine");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
    cy.screenshot();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required custom command", () => {
    cy.webdriverUni_COntactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "my input is fine",
      "body",
      "Error: Invalid email address"
    );
    cy.screenshot();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required custom command and env variable", () => {
    cy.webdriverUni_COntactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      " ",
      "my input is fine",
      "body",
      "Error: Invalid email address"
    );
    cy.screenshot();
  });
});
