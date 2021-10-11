const config = require("./jest.config");
module.exports = {
    ...config,
    testMatch: ["**/api/specs/*.spec.js"],
};
