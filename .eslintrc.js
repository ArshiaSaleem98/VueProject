module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    quotes: ['error', 'single'], // enforce using single quotes
    indent: ['error', 2], // enforce 2 spaces for indentation
  },
};
