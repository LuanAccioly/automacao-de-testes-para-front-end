# Automacao-de-testes-para-front-end

## Conteúdo programático

- [Introdução a automação e visão inicial de Cypress](cypress\e2e\introducao_e_primeiro_uso_cypress)
  
  - Abordagens para automação de testes
  - Fatores de sucesso para automação
  - Principais diferenças entre Cypress e outros frameworks
  - Funcionalidades da GUI, interação via linha de comando e dashboard
  - Instalando e executando Cypress
  - Escrevendo e executando os primeiros testes/conjuntos de testes

- [Interagindo com os elementos da página](cypress\e2e\interagindo_e_verificando_os_elementos_da_pagina)
  
  - Comandos para agir nos elementos (click, dbclick, select, type, etc)
  - Entendendo assincronismo de Cypress (uso de promises)
  - Interagindo com elementos da interface (checkbox, dropdown, tabs, hidden, etc)
  - Opções de locators (e melhores práticas)

- [Verificando os elementos da página](cypress\e2e\assertions)
  
  - Entendendo melhor as asserções (should, expect, and, etc)
  - Explorando particularidades de elementos da interface (tabelas, iframe, alert, child window, etc)

- [Hooks, depuração e relatórios](cypress\e2e\recursos_adicionais)
  
  - Utilizando hooks (before, after, beforeEach, etc)
  - Explorando o selector playground
  - Mais detalhes sobre depuração (leitura do log, debug, pause, etc)
  - Trabalhando com cookies
  - Gerando relatórios, screenshots e vídeos

- [Requisições HTTP e outros recursos](cypress\e2e\exercitando_com_um_sistema_completo)
  
  - Fazendo upload de arquivo
  - Entendendo variáveis e aliases
  - Executando requisições HTTP com o comando request
  - Prática complementar do conteúdo 

## Importância

Tecnologias para automação de testes viabilizam a execução autônoma e sistemática de casos de testes em diferentes níveis e tipos de teste; permitem mover o foco da execução manual dos testes para a criação de scripts que podem ser executados de forma automática. No contexto do teste funcional de sistemas web, existem diversos frameworks para criação e execução automática de testes que simulam as interações do usuário com o navegador de páginas da internet, e permitem verificar o estado dos elementos da interface após a interação. Em particular,  frameworks que permitem automatizar funcionais, como Selenium e Cypress, têm se consolidado como tecnologias fundamentais para criação e manutenção dos testes automáticos. Não é possível afirmar qual o melhor framework, ambos possuem características diversas. Selenium possui arquitetura e framework consolidados, por outro lado, Cypress surge como alternativa com maior facilidade para iniciar com a automação, além de possuir funcionalidades não contempladas originalmente em Selenium

## Objetivo

O objetivo deste curso é apresentar e praticar as principais funcionalidades de Cypress para criação, execução automática, monitoramento, geração de relatórios e depuração dos testes automáticos de sistemas que rodam em um navegador de internet. O foco do curso é nos testes a nível de sistema (End-to-end), apesar de Cypress poder ser utilizado para testar componentes e API. De forma complementar, o curso discute brevemente fatores para o sucesso da automação, escolha de quais testes automatizar e abordagens para automação dos testes. Aspectos avançados como a integração de Cypress com um ambiente DevOps, integração com outros frameworks, padrões para criação de scripts, entre outros assuntos, estão fora dos objetivos do curso.

## Resultados esperados

Durante o curso os participantes irão adquirir a competência para usar as principais funções do framework Cypress para automação a nível de sistema. Após o curso, espera-se que os participantes possam iniciar o uso do framework nos projetos de desenvolvimento do TCE seguindo uma abordagem linear para criação de scripts.

## Links Importantes

- [Actions: type, click, dbclick, check, select, scrollTo](https://example.cypress.io/commands/actions)

- [Asserts](https://example.cypress.io/commands/assertions)

- [Traversal: children, closest, filter, find](https://example.cypress.io/commands/traversal)

- [Hidden Elements](https://www.tutorialspoint.com/cypress/cypress_hidden_elements.htm)

- [Locators](https://www.tutorialspoint.com/cypress/cypress_locators.htm)



---

### Cypress Studio

Para configurar o Studio, vamos no arquivo `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true, // Adicionamos esta linha
  },
});


```

Abra o Cypress, escolha o arquivo que deseja e clique na opção "Add Commands to Test" 

![](images/studiopng.png)


