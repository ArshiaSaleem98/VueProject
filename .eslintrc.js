module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    'cypress/globals': true, // Include Cypress global variables
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:mocha/recommended',
    'plugin:cypress/recommended', // Include Cypress recommended rules
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    quotes: ['error', 'single'], // enforce using single quotes
    indent: ['error', 2], // enforce 2 spaces for indentation
  },
};
