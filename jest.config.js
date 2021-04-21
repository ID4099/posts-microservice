module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/tests/**/*.[jt]s?(x)"],
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/",
        "!<rootDir>/src/controllers/index.ts",
        "!<rootDir>/src/models/Responses.ts",
        "!<rootDir>/src/tools/ReplaceKeys.ts"
    ],
    "coverageThreshold": {
        "global": {
            "lines": 80,
            "statements": 80,
            "functions": 80,
        }
    }
};