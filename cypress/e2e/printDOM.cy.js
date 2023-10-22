
// função auxiliar para imprimir o DOM de um subject 
// retornado por comando de busca (ex: )
const printHTML = ($el) => {
    for (let i = 0; i < $el.length; i++) {
        console.log($el.get(i))
    }
}

it('usando imprimeHTML', () => {
    cy.visit("https://curso-automacao.vercel.app/aulas/aula3/index.html");

    // imprime no console do DevTools
    cy.get("table tbody tr").then(printHTML)
    
    // recupera o DOM ao selecionar get na GUI de Cypress
    cy.get("table tbody tr").invoke("html")
});
