const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");
const cucumber = require("cypress-cucumber-preprocessor").default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      // implement node event listeners here
      const file = config.env.configFile || "";

      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/3-Tests/other/*.js",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    projectId: "e4fgup",
    reporter: "cypress-multi-reporters",
    chromeWebSecurity: false,
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      runMode: 1,
      openMode: 1,
    },
    env: {
      nobiStaging: "https://staging.nobi.cloud/",
      nobiDev: "https://dev.nobi.cloud/",
    },
  },
});
