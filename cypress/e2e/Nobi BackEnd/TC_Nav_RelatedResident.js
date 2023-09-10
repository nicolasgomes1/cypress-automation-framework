/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiNavigation_PO from "../../support/pageObjects/NobiNavigation_PO";

const nobiLogin_PO = new NobiLogin_PO();
const nobiNavigation_PO = new NobiNavigation_PO();

describe("BackEnd Nav trough Related residents options", () => {
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

  it("Related resident", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
  });

  it("Residents", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#residents").contains("Residents").click();
    cy.get("#page_title").should("have.text", "Residents");
  });

  it("Escalation Verification Details", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#views_escalation_verification_details")
      .contains("Escalation Verification Details")
      .click();
    cy.get("#page_title").should(
      "have.text",
      "Escalation Verification Details"
    );
  });

  it("Escalations", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#escalation_events").contains("Escalations").click();
    cy.get("#page_title").should("have.text", "Escalations");
  });

  it("Communications", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#escalation_communications").contains("Communications").click();
    cy.get("#page_title").should("have.text", "Communications");
  });

  it("Measurements", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#resident_measurements").contains("Measurements").click();
    cy.get("#page_title").should("have.text", "Measurements");
  });

  it("Parameters", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#resident_parameters").contains("Parameters").click();
    cy.get("#page_title").should("have.text", "Parameters");
  });

  it("Memberships", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#memberships").contains("Memberships").click();
    cy.get("#page_title").should("have.text", "Memberships");
  });

  it("Warnings", () => {
    nobiNavigation_PO.ExpandMenu("Related resident", "resident_related");
    cy.get("#alerts").contains("Warnings").click();
    cy.get("#page_title").should("have.text", "Warnings");
  });
});
