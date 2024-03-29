// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-mochawesome-reporter/register";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// descomentar caso queira rodar antes de todos os testes
// before(() => {
//     cy.log("Global - Roda uma vez antes de todas as specs");
// });

// beforeEach(() => {
//     cy.log("Global - Roda antes de cada teste em todas as specs");
// });
