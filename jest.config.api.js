const config = require("./jest.config.js");
module.exports = {
    ...config,
    testMatch: ["**/api/specs/*.spec.js"],
};
