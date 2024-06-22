module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'simple-import-sort',
        'import',
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    ignorePatterns: ['/*.ts', '/*.js', '/src/configs/dev'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: [
                    'camelCase',
                    'PascalCase',
                    'snake_case',
                    'UPPER_CASE',
                ],
                filter: {
                    regex: '^_.*$',
                    match: false,
                },
            },
            { selector: 'typeLike', format: ['PascalCase'] },
            {
                selector: 'typeParameter',
                format: ['PascalCase'],
                prefix: ['T', 'E', 'K', 'V', 'R'],
            },
            { selector: 'variableLike', format: ['camelCase'] },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'enum',
                format: ['PascalCase'],
            },
            {
                selector: 'enumMember',
                format: ['UPPER_CASE'],
                leadingUnderscore: 'allow',
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': [
            'error',
            { fixToUnknown: true },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-console': 2,
        'eol-last': ['error', 'always'],
        curly: 'error',
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    },
};
