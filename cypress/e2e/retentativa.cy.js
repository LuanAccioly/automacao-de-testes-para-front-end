let contador = 0
const MIN_TENTATIVAS = 1

it('Teste configurado para falhar algumas vezes',
    {
        retries: {
            runMode: 2,
            openMode: 1,
        },
    },
    () => {
        if (contador++ < MIN_TENTATIVAS) {
            cy.visit('http://paginanaoexiste.com')
        } else {
            cy.visit('https://docs.cypress.io/guides/references/best-practices')
        }
});