/// <reference types="cypress" />

describe('Buscando (Querying)', () => {

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

  it('within - busca dentro de um elemento', () => {
    cy.get('#inputName').type('Meu nome')
    cy.get('.query-form').within(() => {
      cy.get('input:first').type('fake@gmail.com')
      cy.get('input:last').type('d7fs3!HD')
    })
  });

});

describe('Agindo (Acting)', () => {

  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions")
  });

  it('click - em posições além do centro ', () => {
    // padrão do click é no centro
    cy.get('#action-canvas').click()
    // clicando em pontos diferentes
    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('left')
    cy.get('#action-canvas').click('right')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get('#action-canvas').click('bottom')
    cy.get('#action-canvas').click('bottomRight')
  });

  it('click - em coordenadas bem definidas', () => {
    cy.get('#action-canvas')
      .click(80, 75)
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165)
  });

  it('click - múltiplo', () => {
    cy.get('.action-labels>.label').click({ multiple: true })
  });

});

describe('Asserções (Assertions)', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions')
  });

  it('Encontrando três alementos simultâneos', () => {
    cy.get('.assertions-p').find('p')
      .should(($p) => {
        // retorna um array com os textos dentro de cada p
        let texts = $p.map((i, el) =>
          Cypress.$(el).text() // método text de JQuery 
        )

        // .get() retorna um array de strings
        texts = texts.get()

        expect(texts, 'O array deve ter tamanho 3').to.have.length(3)

        expect(texts, 'Possui todo o texto esperado para o parágrafo').to.deep
          .eq(['Some text from first p',
            'More text from second p',
            'And even more text from third p',
          ])
      })
  });

  it('verifica se número está no intervalo [1..10]', () => {
    // suponha a UI gera um número dinamicamente, de forma aleatória
    // este teste passa se o número em algum momento está no intervalo
    cy.get('#random-number')
      .should(($div) => {
        //o corpo desta função é executado 
        // até que passe a asserção ou aconteça timeout
        const n = parseFloat($div.text())
        expect(n).to.be.gte(1).and.be.lte(10)
      })
  });

  it('Verificando a tabela', () => {
    cy.get('.assertion-table')
      .find('tbody tr:last').should('have.class', 'success')
      .find('td')
      .first()
      // checking the text of the  element in various ways
      .should('have.text', 'Column content')
      .should('contain', 'Column content')
      .should('have.html', 'Column content')
      // chai-jquery uses "is()" to check if element matches selector
      .should('match', 'td')
      // to match text content against a regular expression
      // first need to invoke jQuery method text()
      // and then match using regular expression
      .invoke('text')
      .should('match', /column content/i)

    // a better way to check element's text content against a regular expression
    // is to use "cy.contains"
    // https://on.cypress.io/contains
    cy.get('.assertion-table')
      .find('tbody tr:last')
      // finds first  element with text content matching regular expression
      .contains('td', /column content/i)
      .should('be.visible')
  });

});

describe('Cookies', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/cookies')
  });

  it('get/set cookie', () => {
    //verifica que inicialmente cookies estão vazios
    cy.getCookies().should('be.empty')

    //clica em botão que persiste o cookie com nome token
    cy.get('#getCookie .set-a-cookie').click()

    //recupera o objeto do cookie e verifica se cookie 
    //possui uma propriedade chamada value cujo valor é 123ABC
    cy.getCookie('token').should('have.property', 'value', '123ABC')

    cy.setCookie('cookie2', 'valorCookie')
    cy.getCookie('cookie2').should('have.property', 'value', 'valorCookie')
  });

});

describe('Requisições HTTP', () => {

  it.only("Testando request do tipo GET", () => {
    cy.visit("https://example.cypress.io/commands/network-requests");
    // Click no botão para que a aplicação faça uma requisição GET
    // Esta requisição recupera o comentário com id 1
    cy.get(".network-btn").click();
    // Realiza requisição para recuperar o comentário cujo id é 1
    cy.request('GET', "https://jsonplaceholder.cypress.io/comments/1")//se mudar id falha
      .then(($response) => {
        console.log($response.body)
        // Verifica se body do response coincide com o que está na página
        cy.get(".network-comment").should("contain", $response.body.body);
      }
      );
  });

  it("Testando request do tipo POST", () => {
    const titulo = 'Titulo do POST'
    const conteudo = 'Conteúdo do meu post.'
    // Submete um novo post usando a API REST emulada
    // A emulação retorna uma resposta para simular a criação
    // de um novo registro no backend. 
    cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
      userId: 1,
      title: titulo,
      body: conteudo,
    })
      .then((response) => {
        //código de status confirma que novo post foi criado
        expect(response).property('status').to.equal(201)
        // corpo possui como propriedade o título enviado
        expect(response).property('body').to.contain({ title: titulo, })
        // existem 100 registros na base emulada id do novo post é 101
        expect(response.body).property('id').to.be.eq(101)
      });
  });

  it('Testando intercept e wait', () => {
    // Escuta requisições GET cuja URL contém comments/1
    cy.intercept('GET', '**/comments/*').as('getComment')

    cy.visit('https://example.cypress.io/commands/waiting')
    
    // ao clicar o botão, a página gera a requisição GET no endpoint
    // https://jsonplaceholder.cypress.io/comments/1
    cy.get('.network-btn').click()//se comentar a linha, o wait falha

    // wait for GET comments/1
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])

  });

});
