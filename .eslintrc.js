module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['prettier', 'eslint-plugin-prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018
  },
  rules: {
    'no-console': 1,
    'no-var': 2
  }
};
