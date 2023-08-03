/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe('Inspect Automation Test Store items using chain of commands', () => {
   
    it('click on the first item header', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.contains('Skinsheen Bronzer Stick').click().then(function(itemheaderText) {
            console.log("Selected the following item: " + itemheaderText.text())
        })
    });

    it('click on the first using index', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
})