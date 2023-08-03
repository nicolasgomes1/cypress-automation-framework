/// <reference types="Cypress" />

const { expect } = require("chai");

describe('Verifying variables, cypress commands and jquery commands', () => {
   

    it('navigating to specific product pages', () => {
        cy.visit('https://www.automationteststore.com/')
        //The following will fail order of execution not garanteded
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains("Makeup")
        // const skinupLink = cy.get('a[href*="product/category&path="]').contains("Skincare")
        // makeupLink.click()
        // skinupLink.click()

        //The following will pass
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains("Makeup")
        // makeupLink.click()
        // const skinupLink = cy.get('a[href*="product/category&path="]').contains("Skincare")
        // skinupLink.click()

        // Recommended approach
        cy.get('a[href*="product/category&path="]').contains("Makeup").click()
        cy.get('a[href*="product/category&path="]').contains("Skincare").click()
    });

    it('navigating to specific product pages', () => {
        cy.visit('https://www.automationteststore.com/')

        cy.get('a[href*="product/category&path="]').contains("Makeup").click()

        // One way possible not to use
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())

        cy.get('h1 .maintext').then(($headertext) => {
            const headertext = $headertext.text()
            cy.log('found header text' + headertext)
            expect(headertext).is.eq('Makeup')
        })
    });

    it('Validate properties of the Contacc Us Page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        
        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNametext = text.find('#field_11').text()
            expect(firstNametext).to.contain('First name')

        //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })

        })

       
    });

})