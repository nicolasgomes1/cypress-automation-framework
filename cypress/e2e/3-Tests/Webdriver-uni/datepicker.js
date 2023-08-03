/// <reference types="Cypress" />

describe("test Datepicker via webdriveruni", () => {

  it("Select date from the datepicker", () => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();
    // let date = new Date();
    // date.setDate(date.getDate());
    // cy.log(date.getDate());

    // let date1 = new Date();
    // date1.setDate(date1.getDate() + 5);
    // cy.log(date1.getDate());

    var date = new Date();
    date.setDate(date.getDate() + 365);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleDateString("default", { month: "long" });
    var futureDay = date.getDate();

    cy.log("Future year to select: " + futureYear);
    cy.log("Future month to select: " + futureMonth);
    cy.log("Future date to select: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get('[class="day"]').contains(futureDay).click();
    }

    selectMonthAndYear();
    selectFutureDay();
  });
});
