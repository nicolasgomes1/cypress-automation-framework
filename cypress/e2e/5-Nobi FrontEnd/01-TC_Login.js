/// <reference types="Cypress" />

import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";

describe("Login functionality", () => {
  const nobiLogin_PO = new NobiLogin_PO();

  beforeEach(() => {
    nobiLogin_PO.VisitNobi("nobidev");
  });

  it("Login with valid credentials", () => {
    nobiLogin_PO.LoginData("nicolas.gomes+++@nobi.life", "cypress");
    nobiLogin_PO.SignIn();
    nobiLogin_PO.Menu("Sign out");
    nobiLogin_PO.MsgBox("Signed out successfully.");
  });

  it("Login With Invalid Credentials", () => {
    nobiLogin_PO.LoginData("nicolas.gomes+++@nobi.life", "q");
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
    nobiLogin_PO.UserInformation(
      "Nicolas",
      "Gomes",
      "nicolas.gomes+++++++++@nobi.life",
      "demouser"
    );
  });
});
