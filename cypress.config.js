const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://3076-cypress-alurapic-front.vercel.app/#/home'
  },
});


