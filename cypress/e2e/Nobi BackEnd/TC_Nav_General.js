/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiNavigation_PO from "../../support/pageObjects/NobiNavigation_PO";

const nobiLogin_PO = new NobiLogin_PO();
const nobiNavigation_PO = new NobiNavigation_PO();
describe("BackEnd Nav trough General options", () => {
  const nobiLogin_PO = new NobiLogin_PO();

  // Set the flag to do not skip the logout
  const skipLogout = true;
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
  });

  afterEach(() => {
    if (!skipLogout) {
      cy.get("#logout").click();
      nobiLogin_PO.MsgBox("Signed out successfully");
    }
  });

  it("General", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
  });

  it("General API applications", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#api_applications").contains("API applications").click();
    cy.url().should("include", "/oauth/applications"); // => true
    // Set the flag to skip afterEach
    const skipLogout = true;
  });

  it("General API docs", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#api_docs").contains("API docs").click();
    cy.url().should("include", "/api-docs/index.html"); // => true
    // Set the flag to skip afterEach
    const skipLogout = true;
  });

  it("General Activities", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#activities").contains("Activities").click();
    cy.get("#page_title").should("have.text", "Activities");
  });

  it("General Alert types", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#alert_types").contains("Alert types").click();
    cy.get("#page_title").should("have.text", "Alert types");
  });

  it("General Communication Configs", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#communication_configs").contains("Communication Configs").click();
    cy.get("#page_title").should("have.text", "Communication Configs");
  });

  it("General Crashes", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#crashes").contains("Crashes").click();
    cy.get("#page_title").should("have.text", "Crashes");
  });

  it("General Departments", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#departments").contains("Departments").click();
    cy.get("#page_title").should("have.text", "Departments");
  });

  it("General Escalation Verification Overview", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#escalation_verification_overview")
      .contains("Escalation Verification Overview")
      .click();
    cy.get("#page_title").should(
      "have.text",
      "Escalation Verification Overview"
    );
  });

  it("General Escalation causes", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#escalation_reasons").contains("Escalation causes").click();
    cy.get("#page_title").should("have.text", "Escalation causes");
  });

  it("General Learning Activities", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#learning_activities").contains("Learning Activities").click();
    cy.get("#page_title").should("have.text", "Learning Activities");
  });

  it("General Remote Access Keys", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#remote_access_keys").contains("Remote Access Keys").click();
    cy.get("#page_title").should("have.text", "Remote Access Keys");
  });

  it("General Room types", () => {
    nobiNavigation_PO.ExpandMenu("General", "general");
    cy.get("#room_types").contains("Room types").click();
    cy.get("#page_title").should("have.text", "Room types");
  });
});
