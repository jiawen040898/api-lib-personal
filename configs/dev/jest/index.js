/** @type {import('jest').Config} */

const config = {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/test/**/*.e2e-spec.ts'],
    globalSetup: '<rootDir>/test/setup/jest/global-setup.ts',
    setupFilesAfterEnv: ['<rootDir>/test/setup/jest/custom-matchers.ts'],
    modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/lib'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/typings',
        '<rootDir>/src/main.ts',
        '<rootDir>/src/app.module.ts',
        '<rootDir>/src/core/configs',
        '<rootDir>/src/core/transformers',
        '<rootDir>/src/shared/interfaces',
        '<rootDir>/src/shared/shared.module.ts',
    ],
    coverageThreshold: {
        global: {
            functions: 100,
        },
    },
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'coverage',
                outputName: 'jest-junit.xml',
                ancestorSeparator: ' › ',
                uniqueOutputName: 'false',
                suiteNameTemplate: '{filepath}',
                classNameTemplate: '{classname}',
                titleTemplate: '{title}',
            },
        ],
    ],
    workerIdleMemoryLimit: '1GB',
};

module.exports = config;
