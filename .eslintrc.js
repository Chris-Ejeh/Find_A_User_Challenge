module.exports = {
    plugins: ['simple-import-sort'],
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['eslint:recommended'],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
