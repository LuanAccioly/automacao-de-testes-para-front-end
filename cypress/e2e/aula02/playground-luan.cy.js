describe("Interagindo com elementos da página", () => {
  beforeEach(() => {
    cy.visit("https://curso-automacao.vercel.app/aulas/aula2/aula2.html");
  });

  it('Teste de clique no botão "Click"', () => {
    cy.get("#btnClick").click();
    cy.get("#result").should("have.text", "Clicou");
  });

  it('Teste de clique duplo no botão "Double Click"', () => {
    cy.get("#btnDoubleClick").dblclick();
    cy.get("#result").should("have.text", "Fui clicado duas vezes");
  });

  it("Teste de seleção de opção no dropdown", () => {
    cy.get("#dropdown").select("Opção 2");
    cy.get("#result").should("have.text", "Opção selecionada: option2");
  });

  it("Teste de digitação no campo de texto", () => {
    const textoDigitado = "Texto de exemplo";
    cy.get("#textInput").type(textoDigitado);
    cy.get("#result").should("contain.text", `: ${textoDigitado}`);
  });
  it("Marca o checkbox", () => {
    cy.get('[data-test="checkbox"]').should("not.be.checked");
    cy.get('[data-test="checkbox"]').check();
    cy.get('[data-test="checkbox"]').should("be.checked");
    cy.get("#result").should("contain", "Checkbox: Marcado");
  });
});

describe("Teste do Playground 2", () => {
  beforeEach(() => {
    cy.visit("https://curso-automacao.vercel.app/aulas/aula3/encontro3.html");
  });

  it("Teste de verificação de texto", () => {
    cy.get("#assertionText").should("have.text", "Texto para verificar");
  });

  it("Teste de verificação de elementos da tabela", () => {
    cy.get("table tbody tr").should("have.length", 2);
    cy.get("table tbody tr").first().should("contain", "Alice");
    cy.get("table tbody tr").first().should("contain", "25");
    cy.get("table tbody tr").eq(1).should("contain", "Bob");
    cy.get("table tbody tr").eq(1).should("contain", "30");
  });

  it("Interagindo com link", () => {
    cy.get("[data-test='googleLink']").click();

    // Usamos o Origin pois estamos lidando com outro dominio
    cy.origin("https://www.google.com", () => {
      cy.get("#APjFqb").should("be.enabled"); // ID do campo de pesquisa do google
      cy.url().should("contain", "google.com");
    });
  });

  it("Abrir Alert", () => {
    cy.get("[data-test=openAlertButton]").click();
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Isso é um alerta!"); // Substitua com o texto do alerta real
    });
  });

  it("Teste de Child Window", () => {
    cy.get("[data-test='openChildWindowButton']")
      .invoke("removeAttr", "target")
      .click();
    cy.origin("https://www.example.com", () => {
      cy.url().should("include", "example.com");
    });
  });
});
