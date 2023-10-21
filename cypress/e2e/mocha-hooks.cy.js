

before(() => { 
    cy.log("Roda antes de todos");
});

after(() => {
    cy.log("Roda depois de todos");
});

beforeEach(() => {
    cy.log("Roda antes de cada teste");
});

afterEach(() => {
    cy.log("Roda após cada testte");
});

it('Teste 1', () => {
    cy.log('Corpo do teste 1')
});

it('Teste 2', () => {
    cy.log('Corpo do teste 2')
});

describe("Grupo de testes", () => {
    beforeEach(() => {
        cy.log("Antes de cada (Bloco interno)");
    });

    it('Teste 3', () => {
        cy.log('Corpo do testes 3')
    });

    it('Teste 4', () => {
        cy.log('Corpo do teste 4')
    });
});
