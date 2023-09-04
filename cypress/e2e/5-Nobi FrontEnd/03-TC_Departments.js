/// <reference types="Cypress" />
import NobiDepartments_PO from "../../support/pageObjects/NobiDepartments_PO";
import NobiLogin_PO from "../../support/pageObjects/NobiLogin_PO";

describe("Departments", () => {
  const nobiLogin_PO = new NobiLogin_PO();
  const nobiDepartments_PO = new NobiDepartments_PO();

  beforeEach(() => {
    nobiLogin_PO.VisitNobi();
    nobiLogin_PO.Email("nicolas.gomes@nobi.life");
    nobiLogin_PO.Password("qDpmyVzgp4ePxbC");
    nobiLogin_PO.SignIn();
  });

  it("Creation of a department", () => {
    nobiLogin_PO.Menu("Departments");
    nobiDepartments_PO.adddepartment();
    nobiDepartments_PO.adddepartmentinfo("Open network");
    nobiDepartments_PO.addwifisecurityinfo("Open network", "hello");
    nobiDepartments_PO.savedepartment();
    nobiLogin_PO.MsgBox("Successfully added");
  });

  it.only("Deletion of a department", () => {
    nobiLogin_PO.Menu("Departments");
    nobiDepartments_PO.adddepartment();
    nobiDepartments_PO.adddepartmentinfo("Open network");
    nobiDepartments_PO.addwifisecurityinfo("Open network", "hello");
    nobiDepartments_PO.savedepartment();
    nobiLogin_PO.MsgBox("Successfully added");

    // Find the table rows (tr elements)
    cy.get(".table-hover.table-vcenter tbody tr").each((row, index) => {
      // Find td1 within the current row
      cy.wrap(row)
        .find("td:nth-child(1)")
        .invoke("text")
        .then((td1Text) => {
          if (td1Text === '"My Second Department"') {
            // Click on the element with data-method="delete" within the corresponding td3
            cy.wrap(row).find('td:nth-child(3) [data-method="delete"]').click();
          }
        });
    });
  });
});
