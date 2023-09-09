/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";

const nobiLogin_PO = new NobiLogin_PO();

describe("BackEnd Nav", () => {
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

  it.skip("Check Dashboard", () => {
    cy.get("#dashboard").click();
    cy.get("#page_title").should("have.text", "Dashboard");
  });

  it("General Menu", () => {
    cy.get("#tabs")
      .contains("General")
      .trigger("mouseover")
      .then(() => {
        cy.get("#general .menu").invoke("show").should("be.visible");
      });
  });

  it("Related account", () => {
    cy.get("#tabs")
      .contains("Related account")
      .trigger("mouseover")
      .then(() => {
        cy.get("#account_related .menu").invoke("show").should("be.visible");
      });
  });

  it("Related device", () => {
    cy.get("#tabs")
      .contains("Related device")
      .trigger("mouseover")
      .then(() => {
        cy.get("#device_related .menu").invoke("show").should("be.visible");
      });
  });

  it("Related resident", () => {
    cy.get("#tabs")
      .contains("Related resident")
      .trigger("mouseover")
      .then(() => {
        cy.get("#resident_related .menu").invoke("show").should("be.visible");
      });
  });

  it("AI", () => {
    cy.get("#tabs")
      .contains("AI")
      .trigger("mouseover")
      .then(() => {
        cy.get("#ai .menu").invoke("show").should("be.visible");
      });
  });
});
