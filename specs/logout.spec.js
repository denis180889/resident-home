import puppeteer from "puppeteer";
import puppeteerConfig from "../puppeteer.config.json";

describe("Logout action tests", () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch(puppeteerConfig);
        page = await browser.newPage();
    });

    afterEach(async () => {
        await browser.close();
    });

    test("Logout action test", async () => {

    });

})