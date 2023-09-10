/// <reference types="Cypress" />
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiNavigation_PO from "../../support/pageObjects/NobiNavigation_PO";

const nobiLogin_PO = new NobiLogin_PO();
const nobiNavigation_PO = new NobiNavigation_PO();
describe("BackEnd Nav trough AI options", () => {
  const nobiLogin_PO = new NobiLogin_PO();

  // Set the flag to do not skip the logout
  let skipLogout;
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
    if (skipLogout === false) {
      cy.get("#logout").click();
      nobiLogin_PO.MsgBox("Signed out successfully");
      cy.task("log", "Logged out successfully.");
      cy.clearAllCookies();
    } else if (skipLogout === true) {
      cy.clearAllCookies();
      cy.task("log", "No Logged out available.");
    }
  });

  afterEach(function () {
    // Log the test result using the custom command
    cy.logTestResult();
  });

  it("AI", () => {
    skipLogout = false;
    nobiNavigation_PO.ExpandMenu("AI", "ai");
  });

  it("AI Detected falls", () => {
    skipLogout = false;
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#detected_falls").contains("Detected falls").click();
    cy.get("#page_title").should("have.text", "Detected Falls");
  });

  it("AI Download downsampled training CSV", () => {
    skipLogout = false;
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
    skipLogout = false;
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#download_training_csv").contains("Download training CSV").click();
    cy.get("#page_title").should("have.text", "Download training CSV");
  });

  it("AI Download upsampled training CSV", () => {
    skipLogout = false;
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
    skipLogout = false;
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#pose_stats").contains("Pose stats").click();
    cy.get("#page_title").should("have.text", "Pose stats");
  });

  it("AI Turbo Annotator", () => {
    skipLogout = true;
    nobiNavigation_PO.ExpandMenu("AI", "ai");
    cy.get("#turbo_annotator").contains("Turbo Annotator").click();
    cy.get("#main-container").contains(
      "Cycle through positions with keyboard arrows. Click to annotate. Shift click to annotate all up till that one."
    );
  });
});
