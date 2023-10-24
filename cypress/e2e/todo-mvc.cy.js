
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

it('Marca e desmarca item (com variáveis e alias)', () => {
  const item1 = 'Fazer backup'
  const item2 = 'Preparar aula'
  // Insere dois elementos na lista
  cy.get('.new-todo')
    .type(item1).type('{enter}')
    .type(item2).type('{enter}')
  // Verifica que o tamanho da lista é 2
  cy.get('.todo-list li')
    .as('lis')
    .should('have.length',2)
  // O conteúdo corresponde ao que foi digitado
  cy.get('.todo-list .view > label')
    .as('labels')
    .eq(0).should('have.text', item2)
  cy.get('@labels').eq(1).should('have.text', item1)
  // Marca um dos elementos como completo
  cy.get('.toggle').eq(0)
    .as('toggle')
    .click()
  // Verifica que o elemento marcado está marcado como completo
  cy.get('@lis').first().should('have.class','completed')
  // Desmarque o elemento que foi marcado
  cy.get('@toggle').click()
  // Verifica que o estilo do elemento é o estilo antes da marcação 
  cy.get('@lis').first().should('not.have.class','completed')
  // Tamanho da lista continua sendo 2
  cy.get('@lis').should('have.length',2)  
});

it.only('Inserindo tarefas a partir de um arquivo', () => {  
    //carrega tarefas a partir do arquivo
    cy.fixture('todos.json').then(($fix)=>{
      let contador = 1 
      //insere cada das tarefas do arquivo
      $fix.tarefas.forEach(($tarefa)=>{
        //digita uma nova tarefa
        cy.get('.new-todo').type($tarefa).type('{enter}')
        //verifica o tamanho da lista após inserir tarefa
        cy.get('.todo-list li').should('have.length',contador++)
      })
      contador = 0
      //verifica que as tarefas estão na lista
      // na ordem inversa que foram inseridas
      $fix.tarefas.reverse().forEach(($tarefa)=>{
        cy.get('.todo-list .view > label')
          .eq(contador++).should('have.text', $tarefa)
      })
    })  
});