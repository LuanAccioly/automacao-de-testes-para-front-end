const { defineConfig } = require("cypress");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  chromeWebSecurity: false, // para acessar conteúdo de um iFrame
  video: true, // para gravar vídeos ao rodar npx cypress run
  e2e: {
    experimentalStudio: true, //para habilitar o Selector Playground
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: true,
    html: false,
    json: true,
    ignoreVideos: true,
    reportDir: "cypress/report/mochawesome",
  },
});
