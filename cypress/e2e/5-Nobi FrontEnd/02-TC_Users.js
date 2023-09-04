/// <reference types="Cypress" />

import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiUsers_PO from "../../support/pageObjects/NobiUsers_PO";

describe("Users", () => {
  const nobiLogin_PO = new NobiLogin_PO();
  const nobiUsers_PO = new NobiUsers_PO();

  beforeEach(() => {
    nobiLogin_PO.VisitNobi();
    nobiLogin_PO.LoginData("nicolas.gomes@nobi.life", "qDpmyVzgp4ePxbC");
    nobiLogin_PO.SignIn();
  });

  it.only("Creation of user", () => {
    nobiLogin_PO.Menu("Users");
    nobiUsers_PO.adduser();
    nobiUsers_PO.addUserInfo(
      "nicolas+011@nobi.life",
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
    cy.contains("tr", "danielle+west@nobi.life").within(() => {
      cy.contains("Edit").click();
    });
  });

  it("Manage roles", () => {
    nobiLogin_PO.Menu("Users");
    cy.contains("tr", "danielle+west@nobi.life").within(() => {
      cy.contains("Manage roles").click();
    });
  });

  it("Resend invitation", () => {
    nobiLogin_PO.Menu("Users");
    cy.contains("tr", "nicolas+011@nobi.life").within(() => {
      cy.contains("Resend invitation").click();
    });
    nobiLogin_PO.MsgBox(
      "Invitation sent. Ask the user to check his/her email."
    );
  });

  it("Delete user but cancel the action", () => {
    nobiLogin_PO.Menu("Users");
    cy.contains("tr", "nicolas+01@nobi.life")
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
});
