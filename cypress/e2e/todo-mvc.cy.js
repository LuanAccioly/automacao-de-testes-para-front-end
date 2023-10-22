
beforeEach(() => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')    
});

it('Adiciona três itens', () => {

  cy.get('.new-todo').type('Pagar boletos que vencem amanhã{enter}')
  cy.get('.new-todo').type('Terminar apresentação{enter}')
  cy.get('.new-todo').type('Agendar encanador para a pia{enter}')
  // retorna os elementos li dentro do item cuja classe é .todo-list
  cy.get('.todo-list li').should('have.length',3)//possui três itens
  //imprime no consolde o texto dos elementos na lista
  cy.get('.todo-list li').each(($el,$i,$list) => {
    console.log($el.text())
  });
});

it('Marca como completo e apaga lista de completos', () => {

  cy.get('.new-todo').type('Fazer backup{enter}')
  cy.get('.toggle').click() // marca como completo
  cy.contains('Clear completed').click() //apaga os completos
  cy.get('.todo-list li').should('have.length',0)//possui 0 itens
});

it('Cria um item', () => {
  // Executa apenas uma vez, não é query nem assertion
  cy.reload()

  // As queries .focused() e .should() estão ligadas,
  // (re) executam até que o elemento em foco tenha a classe 'new-todo'
  cy.focused().should('have.class', 'new-todo')

  // As queries .get() e .find() estão ligadas, 
  // produzem o subject para o comando de ação type
  cy.get('.header').find('.new-todo').type('Algo para fazer{enter}')

  // As duas queries e a asserção estão ligadas
  cy.get('.todoapp').find('.todo-list li').should('have.length', 1)
})

it('Verificando diferentes listas', () => {
  // Acrescenta dois itens
  cy.get('.new-todo').type('Fazer backup{enter}')
  cy.get('.new-todo').type('Preparar aula{enter}')
  // Marca um dos itens como completo
  cy.get('.toggle').eq(0).click()
  // Verifica o tamanho da lista
  cy.get('.todo-list li').should('have.length',2)
  // Clica nos ativos
  cy.contains('Active').click()
  // Verifica o tamanho da lista
  cy.get('.todo-list li').should('have.length',1)
  // Clica nos completos
  cy.contains('Completed').click() //apaga os completos
  // Verifica o tamanho da lista
  cy.get('.todo-list li').should('have.length',1)
});

it('Marca e desmarca item', () => {
  // Insere dois elementos na lista
  cy.get('.new-todo').type('Fazer backup{enter}')
  cy.get('.new-todo').type('Preparar aula{enter}')
  // Verifica que o tamanho da lista é 2
  cy.get('.todo-list li').should('have.length',2)
  // O conteúdo corresponde ao que foi digitado
  cy.get('.todo-list .view > label').eq(0).should('have.text', 'Preparar aula')
  cy.get('.todo-list .view > label').eq(1).should('have.text', 'Fazer backup')
  // Marca um dos elementos como completo
  cy.get('.toggle').eq(0).click()
  // Verifica que o elemento marcado está marcado como completo
  cy.get('.todo-list li').first().should('have.class','completed')
  // Desmarque o elemento que foi marcado
  cy.get('.toggle').eq(0).click()
  // Verifica que o estilo do elemento é o estilo antes da marcação 
  cy.get('.todo-list li').first().should('not.have.class','completed')
  // Tamanho da lista continua sendo 2
  cy.get('.todo-list li').should('have.length',2)  
});