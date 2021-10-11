import puppeteer from "puppeteer";
import puppeteerConfig from "../../puppeteer.config.json";
import { HomePage, SignInPage } from "../pages";

describe("Logout action tests", () => {
    let browser;
    let page;
    let homePage;
    let signInPage;

    const url = "http://automationpractice.com/index.php";
    const email = "febaxos520@omibrown.com";
    const password = "123456";

    beforeEach(async () => {
        browser = await puppeteer.launch(puppeteerConfig);
        page = await browser.newPage();
        homePage = new HomePage(page);
        signInPage = new SignInPage(page);
    });

    afterEach(async () => {
        await browser.close();
    });

    test("Logout action test", async () => {
        await homePage.goToHomePage(url);
        await homePage.goToSignInPage();
        await signInPage.signIn(email, password);
    });

})