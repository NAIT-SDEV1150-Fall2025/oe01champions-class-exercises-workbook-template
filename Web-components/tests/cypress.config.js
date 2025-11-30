const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log('\t' + message);
          return null; // A task must return something or null
        },
      });
      return config;
    },
  },
});
