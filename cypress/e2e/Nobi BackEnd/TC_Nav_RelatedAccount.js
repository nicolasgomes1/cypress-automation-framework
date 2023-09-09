/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiNavigation_PO from "../../support/pageObjects/NobiNavigation_PO";
const nobiLogin_PO = new NobiLogin_PO();
const nobiNavigation_PO = new NobiNavigation_PO();
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

  it("Related account", () => {
    nobiNavigation_PO.ExpandMenu("Related account", "account_related");
  });

  it("Related account Account", () => {
    nobiNavigation_PO.ExpandMenu("Related account", "account_related");
    cy.get("#accounts").contains("Accounts").click();
    cy.get("#page_title").should("have.text", "Accounts");
  });

  it("Related account Cluster", () => {
    nobiNavigation_PO.ExpandMenu("Related account", "account_related");
    cy.get("#clusters").contains("Clusters").click();
    cy.get("#page_title").should("have.text", "Clusters");
  });

  it("Related account Resellers", () => {
    nobiNavigation_PO.ExpandMenu("Related account", "account_related");
    cy.get("#resellers").contains("Resellers").click();
    cy.get("#page_title").should("have.text", "Resellers");
  });

  it("Related account Sites", () => {
    nobiNavigation_PO.ExpandMenu("Related account", "account_related");
    cy.get("#sites").contains("Sites").click();
    cy.get("#page_title").should("have.text", "Sites");
  });

  it("Related account Users", () => {
    nobiNavigation_PO.ExpandMenu("Related account", "account_related");
    cy.get("#users").contains("Users").click();
    cy.get("#page_title").should("have.text", "Users");
  });

  it("Related account user roles", () => {
    nobiNavigation_PO.ExpandMenu("Related account", "account_related");
    cy.get("#grouping_user_roles").contains("Users roles").click();
    cy.get("#page_title").should("have.text", "Grouping User Roles");
  });
});
