
it.skip('teste completado com Cypress Studio', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.new-todo').clear();
    cy.get('.new-todo').type('A{enter}');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.new-todo').clear();
    cy.get('.new-todo').type('B{enter}');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .view > .toggle').check();
    cy.get('.completed > .view > .toggle').should('be.checked');
    cy.get('.completed > .view > label').should('have.text', 'B');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.completed > .view > .toggle').uncheck();
    cy.get(':nth-child(1) > .view > .toggle').should('not.be.checked');
    /* ==== End Cypress Studio ==== */
});

it('depurando com o debugger2', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')
  cy.get('.new-todo').clear();
  cy.get('.new-todo').type('A{enter}').then(()=>{
    debugger    
  })
  cy.get('label').should('have.text', 'A');
  cy.get('.toggle').should('not.be.checked').then(()=>{
    debugger
  });
});

it.only('depurando com o debugger', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')
  cy.get('.new-todo').clear();
  cy.get('.new-todo').type('A{enter}').debug();
  cy.get('label').should('have.text', 'A');
  cy.get('.toggle').should('not.be.checked').debug();
});