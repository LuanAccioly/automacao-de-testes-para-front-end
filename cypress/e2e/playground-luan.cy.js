describe("Interagindo com elementos da página", () => {
  beforeEach(() => {
    cy.visit("https://curso-automacao.vercel.app/aulas/aula2/index.html");
  });

  it('Clique no botão "Click"', () => {
    cy.get("#btnClick").click();
    cy.get("#result").should("have.text", "Clicou");
  });

  it('Clique duplo no botão "Double Click"', () => {
    cy.get("#btnDoubleClick").dblclick();
    cy.get("#result").should("have.text", "Fui clicado duas vezes");
  });

  it("Seleção de opção no dropdown", () => {
    cy.get("#dropdown").select("Opção 2");
    cy.get("#result").should("have.text", "Opção selecionada: option2");
  });

  it("Digitação no campo de texto", () => {
    const textoDigitado = "Texto de exemplo";
    cy.get("#textInput").type(textoDigitado);
    cy.get("#result").should("contain.text", `: ${textoDigitado}`);
  });

  it("Marcando um checkbox", () => {
    cy.get('[data-test="checkbox"]').should("not.be.checked");
    cy.get('[data-test="checkbox"]').check();
    cy.get('[data-test="checkbox"]').should("be.checked");
    cy.get("#result").should("contain", "Checkbox: Marcado");
  });

  it("Desmarcando um checkbox", () => {
    cy.get('[data-test="checked-checkbox"]').should("be.checked").uncheck();
    cy.get('[data-test="checked-checkbox"]').should("not.be.checked");
    cy.get("#result").should("contain", "Checkbox: Desmarcado");
  });

  it("Upload arquivos", () => {
    cy.get("input[type=file]").selectFile("cypress/fixtures/example.json");
  });
});

describe("Teste de elementos com particularidades", () => {
  beforeEach(() => {
    cy.visit("https://curso-automacao.vercel.app/aulas/aula3/index.html");
  });

  it("Verificação de texto", () => {
    cy.get("#assertionText").should("have.text", "Texto para verificar");
  });

  it("Verificação de elementos da tabela", () => {
    cy.get("table tbody tr").should("have.length", 2);
    cy.get("table tbody tr").first().should("contain", "Alice");
    cy.get("table tbody tr").first().should("contain", "25");
    cy.get("table tbody tr").eq(1).should("contain", "Bob");
    cy.get("table tbody tr").eq(1).should("contain", "30");
  });

  it("Link que leva para um domínio externo", () => {
    cy.get("[data-test='googleLink']").click();

    // Usamos o Origin pois estamos lidando com outro dominio
    cy.origin("https://www.google.com", () => {
      cy.url().should("contain", "google.com");
      cy.get("#APjFqb") // campo de pesquisa do google
        .should("be.enabled");
      cy.get("#APjFqb").type("origin Cypress");
    });
  });

  it("Abre uma Child Window e verifica conteúdo", () => {
    cy.get("[data-test='openChildWindowButton']")
      .invoke("removeAttr", "target")
      .click();
    cy.origin("https://www.example.com", () => {
      cy.url().should("include", "example.com");
      cy.get("h1").contains("Example Domain");
    });
  });

  it("Abrindo um alert", () => {
    const stub = cy.stub();
    // intercepta a ocorrência do evento de abertura de um alerta
    cy.on("window:alert", stub);
    cy.get("[data-test=openAlertButton]")
      .click()
      .then(() => {
        // Confirma que o alerta foi aberto
        expect(stub.getCall(0)).to.be.calledWith("Isso é um alerta!");
      });
  });

  it("Acessar elemento dentro de um Iframe", () => {
    cy.get('[data-test="iframe"]').then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).find("h1").contains("Example Domain");
    });
  });
  
});
