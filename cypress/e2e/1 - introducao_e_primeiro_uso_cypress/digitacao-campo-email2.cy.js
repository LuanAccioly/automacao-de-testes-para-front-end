
  it('Campo de email corretamente preenchido', () => {
    cy.visit('https://example.cypress.io')

    //recupera elemento que contém 'type' no DOM
    //clica no elemento retornado
    cy.contains('type')
      .click()

    // Confere se a nova URL inclui '/commands/actions'
    cy.url()
      .should('include', '/commands/actions')

    // Recupera um campo de entrada que contenha '.action-email'
    // Digita 'fake@email.com'
    // Confere se o campo foi atualizado corretamente
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

    cy.contains('Password').type('123').should('have.value', '12')

  })