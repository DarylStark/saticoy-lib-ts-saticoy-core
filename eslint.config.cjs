const { ESLint } = require('eslint');
const parser = require('@typescript-eslint/parser');
const eslintPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
    {
        ignores: ['dist', '.eslintrc.cjs'],
        languageOptions: {
            parser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': eslintPlugin,
        },
        rules: {
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            indent: ['error', 4],
            '@typescript-eslint/no-unused-vars': 'error',
            eqeqeq: ['error', 'always'],
            'no-console': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'comma-dangle': ['error', 'always-multiline'],
            curly: ['error', 'multi-line'],
        },
    },
];
