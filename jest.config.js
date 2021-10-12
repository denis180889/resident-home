module.exports = {
    testMatch: ["**/specs/*.spec.js"],
    setupFilesAfterEnv: ["jest-extended/all", "jest-expect-message"],
    reporters: [
        "default",
        [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "Test Report",
                includeFailureMsg: true,
            },
        ],
    ],
    verbose: true,
    testTimeout: 1800000,
}