module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'quotes': [2, 'single', 'avoid-escape'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
