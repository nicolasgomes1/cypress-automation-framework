import AutoStore_Homepage_PO from "../../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
  
  before(function () {
    cy.fixture("product").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    autoStore_Homepage_PO.accessHomepage()
    autoStore_Homepage_PO.clickOn_HairCare_Link()
  });

  it("add specific items to basket", () => {
    autoStore_HairCare_PO.addHairCareProductsToBasket();
  });

  it.only("add specific items to basket with specific css", () => {
    cy.get(".fixed_wrapper").should('contain.text',"Eau Parfumee au The Vert Shampoo")
    cy.get(".fixed_wrapper").contains("Eau Parfumee au The Vert Shampoo").click()
  });
});
