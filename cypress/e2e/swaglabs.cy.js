
it.skip('login sem sucesso, senha invalida', () => {
    // LUAN vai fazer
});

it("acesso a página de inventários sem realizar login", () => {
  //failOnStatusCode : false evita falhar quando status code é 401
  cy.visit("https://www.saucedemo.com/inventory.html",{failOnStatusCode : false});
  //vê se o redirecionamento leva para a página inicial de login
  cy.url().should("eq","https://www.saucedemo.com/")
  cy.get("[data-test='error']").should('contain',"You can only access '/inventory.html' when you are logge")
});

describe('Testes com login realizado', () => {

  beforeEach(() => {
    cy.visit("www.saucedemo.com");
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='password']").type("secret_sauce");
    cy.get("[data-test='login-button']").click();
    cy.url().should("include", "/inventory.html");
  });
  
  it.only("inserindo item no carro", () => {
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
    cy.get(".shopping_cart_badge").should('contain',1)
  });
      
});