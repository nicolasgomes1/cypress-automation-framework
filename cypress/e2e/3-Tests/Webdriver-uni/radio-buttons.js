/// <reference types="Cypress" />




describe("Verify radio buttons via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  })
  
  it("Check specific radion buttons", () => {
    cy.get("#radio-buttons").find('[type="radio"]').as("radio");
    cy.get("@radio").first().check();
    cy.get("@radio").eq(1).check();
  });

  it("Validate the states of specific radio buttons", () => {
    cy.get('[value="lettuce"]').should("not.be.checked");
    cy.get('[value="pumpkin"]').should("be.checked");
    cy.get('[value="cabbage"]').should("be.disabled");

    cy.get('[value="lettuce"]').check();
    cy.get('[value="lettuce"]').should("be.checked");
  });
});
