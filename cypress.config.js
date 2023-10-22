const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // para acessar conteúdo de um iFrame
  video : true, // para gravar vídeos ao rodar npx cypress run
  e2e: {
    experimentalStudio: true, //para habilitar o Selector Playground
    baseUrl : 'https://ecommerce-playground.lambdatest.io'
  },
});
