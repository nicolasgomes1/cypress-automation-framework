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
    cy.get("#out_of_bed_filter").contains("out of bed");
    cy.get("#escalation_filter").contains("escalation(s)");
    cy.get("#alert_filter").contains("warning(s)");
    nobiLogin_PO.Menu("Escalations");
    cy.get("#main-container").find("h1").contains("Escalations");
    nobiLogin_PO.Menu("Sleep reports");
    cy.get("#main-container").find("h1").contains("Sleep reports");
    nobiLogin_PO.Menu("Technical alerts");
    cy.get("#main-container").find("h1").contains("Technical alerts");
    nobiLogin_PO.Menu("Monitoring events");
    cy.get("#main-container").find("h1").contains("Monitoring events");
    nobiLogin_PO.Menu("Residents");
    cy.get("#main-container").find("h1").contains("Residents");
    nobiLogin_PO.Menu("Housing units");
    cy.get("#main-container").find("h1").contains("Housing units");
    nobiLogin_PO.Menu("Departments");
    cy.get("#main-container").find("h1").contains("Departments");
    nobiLogin_PO.Menu("Users");
    cy.get("#main-container").find("h1").contains("Users");
    nobiLogin_PO.Menu("Site");
    cy.get("#main-container").find("h1").contains("Site");
    nobiLogin_PO.Menu("Integrations");
    cy.get("#main-container").find("h1").contains("Integrations");
    nobiLogin_PO.Menu("Change my profile");
    cy.get("#main-container").find("h1").contains("Edit User");
  });
});
