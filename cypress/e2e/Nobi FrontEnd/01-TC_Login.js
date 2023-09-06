/// <reference types="Cypress" />
require("cypress-plugin-tab");
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";

describe("Login functionality", () => {
  const nobiLogin_PO = new NobiLogin_PO();

  /**
   * Global declarations
   */
  let email = "nicolas.gomes+++@nobi.life";
  let pwd = "cypress";

  beforeEach(() => {
    nobiLogin_PO.VisitNobi("nobiDev");
  });

  it("Login with valid credentials", () => {
    nobiLogin_PO.LoginData(email, pwd);
    nobiLogin_PO.SignIn();
    nobiLogin_PO.Menu("Sign out", 0);
    nobiLogin_PO.MsgBox("Signed out successfully.");
  });

  it("Login With Invalid Credentials", () => {
    nobiLogin_PO.LoginData(email, "q");
    nobiLogin_PO.SignIn();
    nobiLogin_PO.MsgBox("Invalid Email or password.");
  });

  it("Forgot Password", () => {
    nobiLogin_PO.ForgotPassword();
    nobiLogin_PO.MsgBox(
      "If your email exists on our database, you will receive a password recovery link on your email"
    );
  });

  //simple test because captcha cannot be verified
  it("Create a new family", () => {
    nobiLogin_PO.addNewFamily();
    let r = (Math.random() + 1).toString(36).substring(7);

    nobiLogin_PO.UserInformation(
      "Nicolas",
      "Gomes",
      "nicolas.gomes" + r + "@nobi.life",
      "demouser"
    );
    cy.wait(2000);
    // Switch to the iframe
    cy.get("iframe").then(($iframe) => {
      const iframeDoc = $iframe.contents();

      // Find and click the element within the iframe
      iframeDoc.find(".recaptcha-checkbox-border");
      iframeDoc.find("#recaptcha-anchor").click();
    });
  });
});
