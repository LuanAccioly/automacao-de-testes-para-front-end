///<reference types="cypress"/>

describe('Teste exemplo', () => {
    it('Digitando e verificando', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
    
        // Deve abrir um novo link que contém /commands/actions
        cy.url().should('include', '/commands/actions')
    
        // Pega o input, digita e verifica se o conteúdo digitado está correto
        cy.get('.action-email')
            .type('teste@email.com')
            .should('have.value', 'teste@email.com')

        cy.get('#password1').type('testando')
        cy.get('.action-form > .btn').click()
    })

    it.skip('Teste que falha', () => {
        expect(false).to.be.true
    })
})