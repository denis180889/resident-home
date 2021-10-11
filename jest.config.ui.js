const config = require("./jest.config.js");

module.exports = {
    ...config,
    testMatch: ["**/ui/specs/*.spec.js"],
};