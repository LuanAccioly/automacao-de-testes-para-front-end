/**
 * Page Object Model - LoginPage
 * Sistema: Bank Stories
 * URLs:
 * - https://bank-stories.replit.app/gerente/login
 * - https://bank-stories.replit.app/cliente/login
 */

class LoginPage {
  // ──────────────────────────────────────────
  // Seletores
  // ──────────────────────────────────────────
  get urlGerente() {
    return '/gerente/login';
  }

  get urlCliente() {
    return '/cliente/login';
  }

  // get tabGerente() {
  //   return cy.get('#radix-«r0»-trigger-gerente');
  // }

  // get tabCliente() {
  //   return cy.get('#radix-«r0»-trigger-cliente');
  // }

  get campoCpf() {
    return cy.get('#cpf');
  }

  get campoSenha() {
    return cy.get('#senha');
  }

  get botaoEntrar() {
    return cy.get('.space-y-6 > .inline-flex');
  }

  get tituloPainelControle() {
    return cy.get('.text-3xl');
  }

  // ──────────────────────────────────────────
  // Ações
  // ──────────────────────────────────────────

  /**
   * Navega até a página de login do perfil informado.
   * @param {'gerente' | 'cliente'} perfil
   */
  visitar(perfil) {
    const urls = {
      gerente: this.urlGerente,
      cliente: this.urlCliente,
    };

    cy.visit(urls[perfil]);
  }

  // /**
  //  * Seleciona o perfil Gerente na aba de login.
  //  */
  // selecionarPerfilGerente() {
  //   this.tabGerente.click();
  // }

  // /** 
  //  * Seleciona o perfil Cliente na aba de login.
  //  */
  // selecionarPerfilCliente() {
  //  this.tabCliente.click();
  // }

  /**
   * Preenche o campo CPF.
   * @param {string} cpf
   */
  preencherCpf(cpf) {
    this.campoCpf.type(cpf);
  }

  /**
   * Preenche o campo Senha.
   * @param {string} senha
   */
  preencherSenha(senha) {
    this.campoSenha.type(senha);
  }

  /**
   * Clica no botão de entrar.
   */
  clicarEntrar() {
    this.botaoEntrar.click();
  }

  /**
   * Realiza o fluxo completo de login como Gerente.
   * @param {string} cpf   - CPF do gerente (padrão: '12345678901')
   * @param {string} senha - Senha do gerente (padrão: '1234*!gerente')
   */
  loginComoGerente(cpf, senha) {
    this.visitar('gerente');
    this.preencherCpf(cpf);
    this.preencherSenha(senha);
    this.clicarEntrar();
  }

  loginComoCliente(cpf, senha) {
    this.visitar('cliente');
    this.preencherCpf(cpf);
    this.preencherSenha(senha);
    this.clicarEntrar();
  }

  // ──────────────────────────────────────────
  // Asserções
  // ──────────────────────────────────────────

  /**
   * Valida que o login foi bem-sucedido verificando o título do Painel de Controle.
   */
  validarLoginGerente() {
    this.tituloPainelControle.should('have.text', 'Painel de Controle');
  }

  validarLoginCliente() {
    this.tituloPainelControle.should('have.text', 'Visão Geral');
  }

}

export default new LoginPage();
