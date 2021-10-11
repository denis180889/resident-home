module.exports = {
    testMatch: ["**/specs/*.spec.js"],
    setupFilesAfterEnv: ["jest-extended", "jest-expect-message"],
    verbose: true,
    testTimeout: 1800000,
}