/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";

const nobiLogin_PO = new NobiLogin_PO();

describe("BackEnd Nav to Settings", () => {
  const nobiLogin_PO = new NobiLogin_PO();

  /**
   * Global declarations
   */
  let email = "nicolas.gomes+admin@nobi.life";
  let pwd = "Olivia@1951";
  let r = (Math.random() + 1).toString(36).substring(7);

  beforeEach(() => {
    nobiLogin_PO.VisitNobi("nobiDev");
    nobiLogin_PO.LoginData(email, pwd);
    nobiLogin_PO.SignIn();
  });

  afterEach(() => {
    cy.get("#logout").click();
    nobiLogin_PO.MsgBox("Signed out successfully");
  });

  it("Check Settings", () => {
    cy.get("#global_settings").click();
    cy.get("#page_title").should("have.text", "Settings");
  });
});
