
it('Campo de email corretamente preenchido', () => {
  //1. Acesse a página https://example.cypress.io.
  //1. Página carregada com sucesso.
  cy.visit('https://example.cypress.io')

  //2. Clique no link 'type'.
  cy.contains('type') //recupera elemento que contém 'type' no DOM
    .click() //clica no elemento retornado

  //2. URL é completada com '/commands/actions'  
  cy.url() //recupera a URL
    .should('include', '/commands/actions')// Confere se a URL inclui '/commands/actions'

  // 3. Digite 'fake@email.com' no campo 'Email address'.
  cy.get('.action-email') //Recupera um campo que contem '.action-email'
    .type('fake@email.com') //Digita 'fake@email.com'

  // 3. Verifique que o campo foi preenchido corretamente.
  cy.get('.action-email') //Recupera um campo que contem '.action-email'
    .should('have.value', 'fake@email.com') //Confere valor do campo

});

it('Versao com alias', () => {
  //1. Acesse a página https://example.cypress.io
  //1. Página carregada com sucesso.
  cy.visit('https://example.cypress.io')

  //2. Clique no link 'type'.
  cy.contains('type') //recupera elemento que contém 'type' no DOM
    .click() //clica no elemento retornado

  //2. URL é completada com '/commands/actions'  
  cy.url() //recupera a URL
    .should('include', '/commands/actions')// Confere se a URL inclui '/commands/actions'

  // 3. Digite 'fake@email.com' no campo 'Email address'.
  cy.get('.action-email') //Recupera um campo que contem '.action-email'
    .as('emailInput')  //Cria um alias para o campo
    .type('fake@email.com') //Digita 'fake@email.com'

  // 3. Verifique que o campo foi preenchido corretamente.
  cy.get('@emailInput') //Recupera o campo de email
    .should('have.value', 'fake@email.com') //Confere valor do campo

  })