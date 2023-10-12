/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')    
});

it('adiciona três itens', () => {

  cy.get('.new-todo').type('Pagar boletos que vencem amanhã{enter}')
  cy.get('.new-todo').type('Terminar apresentação{enter}')
  cy.get('.new-todo').type('Agendar encanador para a pia{enter}')
  // retorna os elementos li dentro do item cuja classe é .todo-list
  cy.get('.todo-list li').should('have.length',3)

});

it.only('marca como completo e apaga lista de completos', () => {
  cy.get('.new-todo').type('Fazer backup{enter}')
  cy.get('.toggle').click() // marca como completo
  cy.contains('Clear completed').click() //apaga os completos
  cy.get('.todo-list li').should('have.length',0)
});


it('asserts change in application state', () => {

  cy.get('.new-todo').type('New Todo {enter}')
  cy.get('.new-todo').type('Another Todo {enter}')
  cy.get(".todo-list").find('li').should('have.length', 2)
});