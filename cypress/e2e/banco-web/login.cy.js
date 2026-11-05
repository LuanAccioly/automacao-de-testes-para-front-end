import loginPage from './pages/LoginPage';
import contaPage from './pages/ContaPage';

const CPF = '';
const SENHA = '';

describe('Bank Stories - Gerente', () => {

  beforeEach(() => {
    loginPage.loginComoGerente(CPF, SENHA);
    loginPage.validarLoginGerente();
  });

  const NUMERO_CONTA = '123456789';

  it('Cadastrar conta', () => {
    contaPage.visitar();
    contaPage.getBotaoNovaConta().click();
    contaPage.getCampoNumeroConta().type(NUMERO_CONTA);
    contaPage.getCampoSaldoInicial().type('1000');
    contaPage.getBotaoCadastrar().click();
    contaPage.getCampoPesquisarConta().type(NUMERO_CONTA);
    contaPage.getResultadoPesquisaConta().should('have.text', NUMERO_CONTA);
  });

  
});
