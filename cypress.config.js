import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Path to your feature files

    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",

    experimentalInteractiveRunEvents: true,
    reporter: 'cypress-multi-reporters',
    screenshotOnRunFailure: true,
    screenshotsFolder:"reports/html/screenshots",
    trashAssetsBeforeRuns: true,
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'reports/mochaJson',
        quite: false,
        overwrite: false,
        html: false,
        screenshots: true,
        screenshshotsDir: 'reports/screenshots',
        json: true,}
      },


    async setupNodeEvents(on, config) {
      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Use Esbuild for preprocessing feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );



      // Return updated config
      return config;
    },

  },


});
