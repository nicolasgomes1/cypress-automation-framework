/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe('Test Contact us form via Automation Test Store', () => {
    before(function() {
        cy.fixture('userDetails').as('user')
    })

    beforeEach(() => {
        cy.visit('https://www.automationteststore.com/')
    })
   
    it('Should be able to submit a successful submission via contact us form', () => {
  
        
        cy.get('[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discounts on bulk orders?')
        cy.get('button[title="Submit"]').click()
        cy.screenshot()
    });


    it('Should be able to submit a successful submission via contact us form with xpath', () => {
        cy.xpath('//a[contains(@href, "contact")]').click()
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('Joe_email@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discounts on bulk orders?')
        cy.get('button[title="Submit"]').click()
        cy.screenshot()
        });

    it('Should be able to submit a successful submission via contact us form with assertions', () => {
        cy.get('a[href$="contact"]').click().then(function(linkText) {
            cy.log("Clicked on link using text: " + linkText.text())
        })
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('Joe_email@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discounts on bulk orders?')
        cy.get('button[title="Submit"]').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!')
        cy.screenshot()
            });    
    
})

