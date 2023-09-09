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

  it("AI", () => {
    nobiNavigation_PO.ExpandMenu("AI", "ai");
  });

  it("AI Detected falls", () => {
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#detected_falls").contains("Detected falls").click();
    cy.get("#page_title").should("have.text", "Detected Falls");
  });

  it("AI Download downsampled training CSV", () => {
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#download_downsampled_training_csv")
      .contains("Download downsampled training CSV")
      .click();
    cy.get("#page_title").should(
      "have.text",
      "Download downsampled training CSV"
    );
  });

  it("AI Download training CSV", () => {
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#download_training_csv").contains("Download training CSV").click();
    cy.get("#page_title").should("have.text", "Download training CSV");
  });

  it("AI Download upsampled training CSV", () => {
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#download_upsampled_training_csv")
      .contains("Download upsampled training CSV")
      .click();
    cy.get("#download_upsampled_training_csv").should(
      "have.text",
      "Download upsampled training CSV"
    );
  });

  it("AI Pose stats", () => {
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#pose_stats").contains("Pose stats").click();
    cy.get("#page_title").should("have.text", "Pose stats");
  });

  it("AI Turbo Annotator", () => {
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#turbo_annotator").contains("Pose stats").click();
    cy.get("#page_title").should("have.text", "Pose stats");
  });
});
