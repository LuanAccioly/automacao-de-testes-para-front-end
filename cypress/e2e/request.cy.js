it("testando request", () => {
  // Teste de GET
  cy.visit("https://example.cypress.io/commands/network-requests");

  // Click no botão para fazer a requisição
  cy.get(".network-btn").click();

  // Passamos a URL da requisição
  cy.request("https://jsonplaceholder.cypress.io/comments/1").then(
    (response) => {
      // Todo código aqui dentro só será executado após a resposta do request

      // Verificamos se o campo de resultado do site contém o conteúdo recebido pelo request
      cy.get(".network-comment").should("contain", response.body.body);
    }
  );

  // Teste de POST
  cy.get(".network-post").click();
  cy.request("https://jsonplaceholder.cypress.io/comments").then(() => {
    // Verificamos se o campo de resultado do site contém o conteúdo recebido pelo request
    cy.get(".network-post-comment").should("contain", "POST successful!");
  });
});
