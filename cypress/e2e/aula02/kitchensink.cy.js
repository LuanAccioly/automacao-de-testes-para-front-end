/// <reference types="cypress" />

it('get: busca botao e verifica seu conteúdo', () => {
  cy.visit('https://example.cypress.io/commands/querying')  

  //busca pelo id
  cy.get('#query-btn').should('contain', 'Button')
  
  //busca pela classe
  cy.get('.query-btn').should('contain', 'Button')
  
  //retorna primeiro botão que é filho direto de .well, 
  //que é descendente de #queryng
  cy.get('#querying .well>button:first').should('contain', 'Button')

  //cy.get('#querying .row').should('have.have.length',5)
});


it('get: busca elemento pelo test-id', () => {
  cy.visit('https://example.cypress.io/commands/querying')    
  
  cy.get('[data-test-id="test-example"]').should('have.class', 'example')
  
});

it('contains: busca elemento pelo conteúdo', () => {
  cy.visit('https://example.cypress.io/commands/querying')    
  
  //busca elemento da classe .query-list e procura na sua árvore 
  //elemento que contém bananas
  //verifica se a classe do elemento é igual a third
  cy.get('.query-list')
  .contains('bananas').should('have.class', 'third')

  // busca utilizando expressão regular (regexp)
  cy.get('.query-list')
    .contains(/^b\w+/).should('have.class', 'third')

  cy.get('#querying')
    .contains('ul', 'oranges')
    .should('have.class', 'query-list')
  

});

