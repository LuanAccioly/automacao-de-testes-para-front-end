# Automacao-de-testes-para-front-end

## Preparando o projeto

- Atualizar
  - npm i

- Abrir o projeto com Cypress
  - npx cypress open

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


