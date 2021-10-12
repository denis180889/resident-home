import puppeteer from "puppeteer";
import faker from "faker";
import puppeteerConfig from "../../puppeteer.config.json";
import { HomePage, ShopMattressPage, ShippingPage } from "../pages";

describe("Purchase tests", () => {
    let browser;
    let page;
    let homePage;
    let shopMattressPage;
    let shippingPage;

    const url = "https://qa.levelsleep.com/";

    beforeEach(async () => {
        browser = await puppeteer.launch(puppeteerConfig);
        page = await browser.newPage();
        homePage = new HomePage(page);
        shopMattressPage = new ShopMattressPage(page);
        shippingPage = new ShippingPage(page);
    });

    afterEach(async () => {
        await browser.close();
    });

    test("Purchase mattress test", async () => {
        await homePage.goToHomePage(url);
        await homePage.goToShopMattressPage();
        await shopMattressPage.addToCart();
        await shippingPage.fillEmail(faker.internet.email());
        await shippingPage.fillFullName(faker.name.findName());
        await shippingPage.fillAddress(faker.address.streetName());
        await shippingPage.fillCity(faker.address.city());
        await shippingPage.selectState("CA");
        await shippingPage.fillZipCode("90011");
        await shippingPage.fillPhoneNumber(faker.phone.phoneNumber());
        await shippingPage.continueToBilling();

        await page.waitForTimeout(15000);
    });

})