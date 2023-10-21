
describe('Testes com login prévio', () => {

  beforeEach(() => {
    //realiza login com sucesso
    cy.loginSauce("standard_user", "secret_sauce");
    // verifica que redirecionou para a página de produtos
    cy.url().should("include", "/inventory.html");
  });

  it("Inserindo item no carro", () => {
    // seleciona um produto chamado
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
    // contador do carrinho deve conter uma unidade
    cy.get(".shopping_cart_badge").should("have.text", 1);
  });

});

it("Login sem sucesso: usuário válido e senha incorreta", () => {
  // realiza login com usuário válido e senha incorreta
  cy.loginSauce("standard_user", "incorrect_password");
  // verifica a mensagem de erro
  cy.get('[data-test="error"]').should(
    "contain",
    "Username and password do not match any user"
  );
});

it("Acesso à página de produtos sem realizar login", () => {
  // failOnStatusCode : false evita falhar quando status code é 401
  cy.visit("https://www.saucedemo.com/inventory.html", {
    failOnStatusCode: false,
  });
  // vê se o redirecionamento leva para a página inicial de login
  cy.url().should("be.equal", "https://www.saucedemo.com/");
  // verifica a mensagem de erro
  cy.get("[data-test='error']").should(
    "contain",
    "You can only access '/inventory.html' when you are logge"
  );
});


