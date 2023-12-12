let contador = 0
const MIN_TENTATIVAS = 2

it('Teste configurado para falhar algumas vezes',
    {
        retries: {
            runMode: 2,
            openMode: 1,
        },
    },
    () => {
        if (contador++ < MIN_TENTATIVAS) {
            //faz o teste falhar
            cy.visit('http://paginanaoexiste.com')
        } else {
            //faz o teste passar
            cy.visit('https://docs.cypress.io/guides/references/best-practices')
        }
});