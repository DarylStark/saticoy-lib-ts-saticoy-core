import parser from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        ignores: ['dist/', '.eslint.config.mjs'],
        files: ['src/**/*.ts'],
        languageOptions: {
            parser,
            ecmaVersion: 2020,
            sourceType: 'commonjs',
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
            curly: ['error', 'multi'],
        },
    },
];
