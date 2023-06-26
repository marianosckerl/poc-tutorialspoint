const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: "8nir56",
  video: true,
  videoCompression: false,
  trashAssetsBeforeRuns: false,
  videoUploadOnPasses: true,
  chromeWebSecurity: false,
  pageLoadTimeout: 30000, 
  experimentalModifyObstructiveThirdPartyCode: false,
  modifyobstructivecode: false,
  experimentalStudio: true, 
  e2e: {
    baseUrl: 'https://www.tutorialspoint.com',
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("task", {
        log(args) {
          console.log(...args);
          return null;
        }
      }); 
      require('cypress-terminal-report/src/installLogsPrinter')(on);
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    specPattern: "cypress/e2e/**/*.feature",
    blockHosts: [
      "*hsappstatic.net",
      "*hubspot.com",
      "*hs-banner.com",
      "*usemessages.com",
      "*newrelic.com",
      "*nr-data.net",
      "*datadoghq.com",
      "*vidoomy.com",
      "*googlesyndication.com",
      "*servenobid.com",
      "*amazon-adsystem.com",
      "*sonobi.com",
      "*e-planning.net",
      "*casalemedia.com",
      "*rubiconproject.com",
      "*doubleclick.net",
      "*smartadserver.com",
      "*smilewanted.com",
      "*lijit.com",
      "*bidswitch.net",
      "*onetag-sys.com",
      "*3lift.com",
      "*openx.net",
      "*criteo.com",
      "*shop.pe",
      "*adsrvr.org",
      "*teads.tv",
      "*adnxs.com",
      "*pubmatic.com",
      "*jsdelivr.net",
      "*yellowblue.io",
      "*criteo.net",
      "*a-mo.net",
      "*media.net",
      "*nextmillmedia.com",
      "*adnxs.com",
      "*adpushup.com",
      "*google.com",
      "*rlcdn.com",
      "*googletagmanager.com",
      "*cloudfront.net"
      ]
  },
});