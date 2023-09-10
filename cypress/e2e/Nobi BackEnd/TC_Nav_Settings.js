/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";

const nobiLogin_PO = new NobiLogin_PO();

describe("BackEnd Nav trough Settings options", () => {
  const nobiLogin_PO = new NobiLogin_PO();

  /**
   * Global declarations
   */
  let NobiAdminUser;
  before(() => {
    cy.fixture("NobiAdminUser").then((user) => {
      NobiAdminUser = user;
    });
  });

  beforeEach(() => {
    nobiLogin_PO.VisitNobi("nobiDev");
    nobiLogin_PO.LoginData(NobiAdminUser.username, NobiAdminUser.password);
    nobiLogin_PO.SignIn();
    cy.task("log", "Logged in successfully.");
  });

  afterEach(() => {
    cy.get("#logout").click();
    nobiLogin_PO.MsgBox("Signed out successfully");
    cy.task("log", "Logged out successfully.");
  });

  afterEach(function () {
    // Log the test result using the custom command
    cy.logTestResult();
  });

  it("Check Settings", () => {
    cy.get("#global_settings").click();
    cy.get("#page_title").should("have.text", "Settings");
  });
});
