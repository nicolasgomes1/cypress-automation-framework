/// <reference types="Cypress" />

import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";
import NobiHousingUnits_PO from "../../support/pageObjects/NobiHousingUnits_PO";

describe("test description", () => {
  const nobiLogin_PO = new NobiLogin_PO();
  const nobiHousingUnit_PO = new NobiHousingUnits_PO();

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

  it("Create a Housing Unit", () => {
    nobiLogin_PO.Menu("Housing units");
    nobiHousingUnit_PO.addHousingUnit();
    nobiHousingUnit_PO.addHousingUnitInfo(
      "Flat 0001" + r,
      "My Second Department"
    );
    nobiHousingUnit_PO.addWifiSecurityInfo(
      "WPA Enterprise",
      "nobi",
      "nobi",
      "happiest"
    );
    nobiHousingUnit_PO.saveHousingUnit();
    nobiLogin_PO.MsgBox("Successfully added");

    cy.contains("tr", "Flat 0001" + r);
  });
  it("Editing a Housing Unit", () => {
    nobiLogin_PO.Menu("Housing units");
    cy.contains("tr", "Flat 0001" + r).within(() => {
      cy.contains("Edit").click();
    });
    nobiHousingUnit_PO.saveHousingUnit();
    nobiLogin_PO.MsgBox("Successfully updated");
  });

  it("Deletion of the housing Unit but cancel it", () => {
    nobiLogin_PO.Menu("Housing units");

    cy.get(".table-hover.table-vcenter tbody tr").each((row, index) => {
      // Find td1 within the current row
      cy.wrap(row)
        .find("td:nth-child(1)")
        .invoke("text")
        .then((td1Text) => {
          if (td1Text === "Flat 0001" + r) {
            // Click on the element with data-method="delete" within the corresponding td3
            cy.wrap(row).find('td:nth-child(4) [data-method="delete"]').click();
          }
        });
    });
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").should("have.text", "Are you sure?");
    cy.get(".swal2-cancel").should("have.text", "Cancel").click();
  });

  it("Deletion of the housing Unit definitevely", () => {
    nobiLogin_PO.Menu("Housing units");

    cy.get(".table-hover.table-vcenter tbody tr").each((row, index) => {
      // Find td1 within the current row
      cy.wrap(row)
        .find("td:nth-child(1)")
        .invoke("text")
        .then((td1Text) => {
          if (td1Text === "Flat 0001" + r) {
            // Click on the element with data-method="delete" within the corresponding td3
            cy.wrap(row).find('td:nth-child(4) [data-method="delete"]').click();
          }
        });
    });
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").should("have.text", "Are you sure?");
    cy.get(".swal2-confirm").should("have.text", "Yes").click();
    nobiLogin_PO.MsgBox("Successfully archived");
  });
});
