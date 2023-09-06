/// <reference types="Cypress" />
import NobiDepartments_PO from "../../support/pageObjects/NobiDepartments_PO";
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";

describe("Departments", () => {
  const nobiLogin_PO = new NobiLogin_PO();
  const nobiDepartments_PO = new NobiDepartments_PO();

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

  it("Creation of a department", () => {
    nobiLogin_PO.Menu("Departments");
    nobiDepartments_PO.addDepartment();
    nobiDepartments_PO.addDepartmentInfo("My Second Department" + r);
    nobiDepartments_PO.addWifiSecurityInfo("Open network", "hello");
    nobiDepartments_PO.saveDepartment();
    nobiLogin_PO.MsgBox("Successfully added");
  });

  it("Edition of the department", () => {
    nobiLogin_PO.Menu("Departments");
    cy.contains("tr", "My Second Department" + r).within(() => {
      cy.contains("Edit").click();
    });
    cy.get("#main-container")
      .find("h1")
      .contains("Department: My Second Department");
    cy.get("#submit_btn").click();
    nobiLogin_PO.MsgBox("Successfully updated");
  });

  it("Deletion of a department but canceling it", () => {
    // Find the table rows (tr elements)
    nobiLogin_PO.Menu("Departments");
    cy.get(".table-hover.table-vcenter tbody tr").each((row, index) => {
      // Find td1 within the current row
      cy.wrap(row)
        .find("td:nth-child(1)")
        .invoke("text")
        .then((td1Text) => {
          if (td1Text === "My Second Department" + r) {
            // Click on the element with data-method="delete" within the corresponding td3
            cy.wrap(row).find('td:nth-child(3) [data-method="delete"]').click();
          }
        });
    });
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").should("have.text", "Are you sure?");
    cy.get(".swal2-cancel").should("have.text", "Cancel").click();
  });

  it("Deletion of a department", () => {
    // Find the table rows (tr elements)
    nobiLogin_PO.Menu("Departments");
    cy.get(".table-hover.table-vcenter tbody tr").each((row, index) => {
      // Find td1 within the current row
      cy.wrap(row)
        .find("td:nth-child(1)")
        .invoke("text")
        .then((td1Text) => {
          if (td1Text === "My Second Department" + r) {
            // Click on the element with data-method="delete" within the corresponding td3
            cy.wrap(row).find('td:nth-child(3) [data-method="delete"]').click();
          }
        });
    });
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").should("have.text", "Are you sure?");
    cy.get(".swal2-confirm").should("have.text", "Yes").click();
    nobiLogin_PO.MsgBox("Successfully deleted");
  });
});
