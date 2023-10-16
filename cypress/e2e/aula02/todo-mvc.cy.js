/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')    
});

it('Adiciona três itens', () => {

  cy.get('.new-todo').type('Pagar boletos que vencem amanhã{enter}')
  cy.get('.new-todo').type('Terminar apresentação{enter}')
  cy.get('.new-todo').type('Agendar encanador para a pia{enter}')
  // retorna os elementos li dentro do item cuja classe é .todo-list
  cy.get('.todo-list li').should('have.length',3)//possui três itens

});

it('Marca como completo e apaga lista de completos', () => {

  cy.get('.new-todo').type('Fazer backup{enter}')
  cy.get('.toggle').click() // marca como completo
  cy.contains('Clear completed').click() //apaga os completos
  cy.get('.todo-list li').should('have.length',0)//possui 0 itens
});

it('Cria um item', () => {
  // Executa apenas uma vez, não é query nem assertion
  cy.reload

  // As queries .focused() e .should() estão ligadas,
  // (re) executam até que o elemento em foco tenha a classe 'new-todo'
  cy.focused().should('have.class', 'new-todo')

  // As queries .get() e .find() estão ligadas, 
  // produzem o subject para o comando de ação type
  cy.get('.header').find('.new-todo').type('Algo para fazer{enter}')

  // As duas queries e a asserção estão ligadas
  cy.get('.todoapp').find('.todo-list li').should('have.length', 1)
})
