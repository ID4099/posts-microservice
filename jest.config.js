module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/tests/**/*.[jt]s?(x)"],
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/",
        "!<rootDir>/src/grpc/services/FundingChangeRequest.ts",
        "!<rootDir>/src/grpc/services/index.ts"
    ],
    "coverageThreshold": {
        "global": {
            "lines": 80,
            "statements": 80,
            "functions": 80,
        }
    }
};