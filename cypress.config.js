const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "mobileSizes": [{ size: [360, 772], name: 'Samsung S22 Ultra' }, { size: [430, 932], name: 'Iphone 14 Pro Max' }, { size: [390, 844], name: 'Iphone 12' }],
      "webSizes": ['ipad-mini', 'macbook-13', 'macbook-16'],
      "url": "https://rapsodo.com/",
    }
  },
});
