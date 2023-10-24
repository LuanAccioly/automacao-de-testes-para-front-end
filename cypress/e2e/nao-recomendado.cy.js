

it('t1 - ok', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-email').type('email')
    cy.get('#password1').type('abc')
});

it('t1 - nok', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    const email = cy.get('.action-email')
    const pwd = cy.get('#password1')
    email.type('email')
    pwd.type('abc')
});