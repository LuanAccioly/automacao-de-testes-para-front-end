/// <reference types="cypress" />

it('adiciona um novo elemento na lista de todo', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  //recupera o campo para inserir e coloca conteúdo  
  cy.get('.new-todo').type('Limpar sala{enter}')

  //recupera o toggle e clica
  cy.get('.toggle').click()

  //recupera a opção para apagar o que está completo e clica
  cy.contains('Clear completed').click()
});


it('asserts change in application state', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  cy.get('.new-todo').type('New Todo {enter}')
  
  cy.get('.new-todo').type('Another Todo {enter}')
  
  cy.get(".todo-list").find('li').should('have.length', 2)
});