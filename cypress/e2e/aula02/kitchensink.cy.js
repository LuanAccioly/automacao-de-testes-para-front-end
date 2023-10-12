/// <reference types="cypress" />

describe('Querying', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/querying')  
  });

  it('get - busca botao', () => {
  
    //busca pelo id
    cy.get('#query-btn').should('contain', 'Button')
    
    //busca pela classe
    cy.get('.query-btn').should('contain', 'Button')
    
    //retorna primeiro botão que é filho direto de .well, 
    //que é descendente de #queryng
    cy.get('#querying .well>button:first').should('contain', 'Button')
  
    //cy.get('#querying .row').should('have.have.length',5)
  });
  
  
  it('get - busca elemento pelo test-id', () => {
    
    cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    
  });
  
  it('contains - busca pelo conteúdo', () => {
    
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
  
  it.only('within - busca dentro de um elemento', () => {
    cy.get('#inputName').type('Meu nome')
    cy.get('.query-form').within(() => {
      cy.get('input:first').type('fake@gmail.com')
      cy.get('input:last').type('d7fs3!HD')
    })
  });
    
});

