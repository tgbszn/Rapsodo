const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  numTestsKeptInMemory: 5,
  experimentalMemoryManagement: true,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  defaultCommandTimeout: 30000,
  "compilerOptions": {
    "types": ["cypress", "cypress-plugin-stripe-elements"]
  },
  
  "retries": {
    "runMode": 2,
    "openMode": 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "mobileSizes": [{ size: [360, 772], name: 'Samsung S22 Ultra' }, { size: [430, 932], name: 'Iphone 14 Pro Max' }, { size: [390, 844], name: 'Iphone 12' }],
      "webSizes": ['macbook-11', 'macbook-13', 'macbook-16'],
      "url": "https://rapsodo.com/",
    }
  },
 
  
});
