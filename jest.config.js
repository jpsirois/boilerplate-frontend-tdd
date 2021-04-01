const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig');

module.exports = {
    'setupFiles': ['<rootDir>/jest.setup.ts'],
    'setupFilesAfterEnv': ['<rootDir>/jest.afterSetup.ts'],
    'testPathIgnorePatterns': [
        '/bower_components/',
        '/node_modules/',
        '/fixtures/'
    ],
    'globals': {
        'BUILD_VERSION': '0.0.0'
    },
    'restoreMocks': true,
    'moduleNameMapper': pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    'transform': {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.tsx$': 'babel-jest',
        '^.+\\.ts$': 'babel-jest'
    }
};