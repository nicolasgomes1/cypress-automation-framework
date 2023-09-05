/// <reference types="Cypress" />

import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiUsers_PO from "../../support/pageObjects/NobiUsers_PO";

describe("Users Management", () => {
  const nobiLogin_PO = new NobiLogin_PO();
  const nobiUsers_PO = new NobiUsers_PO();

  /**
   * Global declarations
   */
  let email = "nicolas.gomes+++@nobi.life";
  let pwd = "cypress";

  beforeEach(() => {
    nobiLogin_PO.VisitNobi("nobiDev");
    nobiLogin_PO.LoginData(email, pwd);
    nobiLogin_PO.SignIn();
    nobiLogin_PO.MsgBox("Signed in successfully");
  });

  afterEach(() => {
    nobiLogin_PO.Menu("Sign out");
  });

  it("Go to contact support ", () => {
    cy.get("#sidebar_toggle").click();
    nobiLogin_PO.Menu("Contact support");
    cy.get(".modal-title")
      .should("be.visible")
      .should("have.text", "Contact Nobi for support");
    cy.get(".modal-footer").contains("Close").click();
    cy.get(".modal-title").should("not.be.visible");
  });
});
