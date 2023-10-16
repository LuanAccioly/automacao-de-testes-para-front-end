it("login com sucesso", () => {
  cy.visit("www.saucedemo.com");
  cy.get("[data-test=username]").type("standard_user");
  cy.get("[data-test=password]").type("secret_sauce");
  cy.get("[data-test=login-button]").click();
  cy.url().should("include", "/inventory.html");
});

// describe("Login session", () => {
//   beforeEach(() => {
//     cy.session("Login", () => {
//       cy.visit("www.saucedemo.com");
//       cy.get("[data-test=username]").type("standard_user");
//       cy.get("[data-test=password]").type("secret_sauce");
//       cy.get("[data-test=login-button]").click();
//     });
//   });
//   it("login com sucesso", () => {
//     cy.getAllSessionStorage().then((session) => {
//       cy.visit("www.saucedemo.com/inventory");
//       cy.url().should("include", "/inventory.html");
//     });
//   });
// });
