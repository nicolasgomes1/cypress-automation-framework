/// <reference types="Cypress" />

import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiUsers_PO from "../../support/pageObjects/NobiUsers_PO";

describe("Users Management", () => {
  const nobiLogin_PO = new NobiLogin_PO();
  const nobiUsers_PO = new NobiUsers_PO();

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
  });

  afterEach(() => {
    nobiLogin_PO.Menu("Sign out");
  });

  it("Creation of user", () => {
    nobiLogin_PO.Menu("Users", "Management");
    nobiUsers_PO.adduser();
    nobiUsers_PO.addUserInfo(
      "nicolas" + r + "@nobi.life",
      "Hello",
      "LastName",
      "Dutch",
      "Manager",
      "+32490666011"
    );
    nobiLogin_PO.MsgBox("Successfully added");
  });

  it("Edition of a user", () => {
    nobiLogin_PO.Menu("Users");
    cy.contains("tr", "nicolas" + r + "@nobi.life").within(() => {
      cy.contains("Edit").click();
    });
  });

  //it("Manage roles", () => {
  //  nobiLogin_PO.Menu("Users");
  //  cy.contains("tr", "nicolas" + r + "@nobi.life").within(() => {
  //    cy.contains("Manage roles").click();
  //  });
  //});

  // it("Resend invitation", () => {
  //  nobiLogin_PO.Menu("Users");
  //  cy.contains("tr", "nicolas+011@nobi.life").within(() => {
  //   cy.contains("Resend invitation").click();
  //  });
  //  nobiLogin_PO.MsgBox(
  //    "Invitation sent. Ask the user to check his/her email."
  //  );
  //});

  it("Delete user but cancel the action", () => {
    nobiLogin_PO.Menu("Users");
    cy.contains("tr", "nicolas" + r + "@nobi.life")
      .find('a[data-role="delete user role"]')
      .click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").should("have.text", "Are you sure?");
    cy.get("#swal2-html-container").should(
      "have.text",
      "Please confirm that you want to remove this user role?"
    );
    cy.get(".swal2-cancel").should("have.text", "Cancel").click();
  });

  it("Delete user", () => {
    nobiLogin_PO.Menu("Users");
    cy.contains("tr", "nicolas" + r + "@nobi.life")
      .find('a[data-role="delete user role"]')
      .click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").should("have.text", "Are you sure?");
    cy.get("#swal2-html-container").should(
      "have.text",
      "Please confirm that you want to remove this user role?"
    );
    cy.get(".swal2-confirm").should("have.text", "Yes").click();

    nobiLogin_PO.MsgBox("User role was successfully deleted.");
  });
});
