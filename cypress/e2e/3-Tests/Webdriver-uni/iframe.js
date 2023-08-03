/// <reference types="Cypress" />

describe('Handling Iframe & Modals', () => {
   
    it('Handle webdriveruni iframe and modal', () => {
    cy.visit('/')
    cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})

    cy.get('#frame').then($iframe => {
        const body = $iframe.contents().find('body')
        cy.wrap(body).as('iframe')
    })

    cy.get('@iframe').find('#button-find-out-more').click()

    cy.get('@iframe').find('#myModal').as('modal')
    
    cy.get('@modal').should(($expectedtext) => {
        const text = $expectedtext.text()

        let validation = `Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as`
        expect(text).to.include(validation)
    })

    cy.get('@modal').contains('Close').click()

    })

})