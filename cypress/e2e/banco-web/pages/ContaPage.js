
class ContaPage {
  // ──────────────────────────────────────────
  // Seletores
  // ──────────────────────────────────────────
  getBotaoNovaConta() {
    return cy.get('.md\\:flex-row > .inline-flex');
  }

  getCampoNumeroConta() {
    return cy.get('#numeroConta');
  }

  getCampoSaldoInicial() {
    return cy.get('#saldoInicial');
  }

  getBotaoCadastrar() {
    return cy.get('.border-t > .bg-primary');
  }

  getCampoPesquisarConta() {
    return cy.get('.relative > .flex');
  }

  getResultadoPesquisaConta() {
    return cy.get('.font-mono');
  }
  
  // ──────────────────────────────────────────
  // Ações
  // ──────────────────────────────────────────

  visitar() {
    cy.get('[href="/gerente/contas"]').click();
  }


  // ──────────────────────────────────────────
  // Asserções
  // ──────────────────────────────────────────

  
}

export default new ContaPage();
