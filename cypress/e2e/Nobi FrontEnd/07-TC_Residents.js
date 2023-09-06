/// <reference types="Cypress" />

import NobiResidents_PO from "../../support/pageObjects/NobiResidents_PO";
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
describe("Residents", () => {
  const nobiLogin_PO = new NobiLogin_PO();
  const nobiResidents_PO = new NobiResidents_PO();

  /**
   * Global declarations
   */
  let email = "nicolas.gomes+++@nobi.life";
  let pwd = "cypress";
  let r = (Math.random() + 1).toString(36).substring(7);

  beforeEach(() => {
    nobiLogin_PO.VisitNobi("nobiDev");
    nobiLogin_PO.LoginData(email, pwd);
    nobiLogin_PO.SignIn();
    nobiLogin_PO.MsgBox("Signed in successfully");
  });

  afterEach(() => {
    nobiLogin_PO.Menu("Sign out");
    nobiLogin_PO.MsgBox("Signed out successfully");
  });

  it("Add a resident", () => {
    nobiLogin_PO.Menu("Residents");
    nobiResidents_PO.addResident();
    nobiResidents_PO.addResidentInfo(
      "Cypress" + r + r,
      "Test",
      "ABC",
      "10/10/2000",
      "Male",
      "Dutch",
      "Flat 0001"
    );
    nobiResidents_PO.saveResident();
    nobiLogin_PO.MsgBox("Successfully added");

    cy.get("#main-container")
      .find("h1")
      .contains("Cypress" + r + r + " Test");
    nobiResidents_PO.saveResident();
    nobiLogin_PO.MsgBox("Successfully updated");
  });
});
