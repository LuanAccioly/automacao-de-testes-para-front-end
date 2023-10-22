it("testando request", () => {
  // Teste de GET
  cy.visit("https://example.cypress.io/commands/network-requests");
  cy.get(".network-btn").click();
  cy.request("https://jsonplaceholder.cypress.io/comments/1").then(
    (response) => {
      cy.get(".network-comment").should("contain", response.body.body);
    }
  );

  // Teste de POST
  cy.get(".network-post").click();
  cy.request("https://jsonplaceholder.cypress.io/comments").then((response) => {
    cy.get(".network-post-comment").should("contain", "POST successful!");
  });
});
