/// <reference types="Cypress" />

import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiUsers_PO from "../../support/pageObjects/NobiUsers_PO";

describe("Navigation", () => {
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
  });

  afterEach(() => {
    nobiLogin_PO.Menu("Sign out");
  });

  it("Test description", () => {
    nobiLogin_PO.Menu("Dashboard");
    nobiLogin_PO.Menu("Escalations");
    cy.get("#main-container").find("h1").contains("Escalations");
    nobiLogin_PO.Menu("Sleep reports");
    cy.get("#main-container").find("h1").contains("Sleep reports");
    nobiLogin_PO.Menu("Technical alerts");
    cy.get("#main-container").find("h1").contains("Technical alerts");
    nobiLogin_PO.Menu("Monitoring events");
    cy.get("#main-container").find("h1").contains("Monitoring events");
  });
});
