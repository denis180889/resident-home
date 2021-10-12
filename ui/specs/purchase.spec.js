import puppeteer from "puppeteer";
import faker from "faker";
import puppeteerConfig from "../../puppeteer.config.json";
import { HomePage, ShopMattressPage, ShippingPage, BillingPage } from "../pages";

describe("Purchase tests", () => {
    let browser;
    let page;
    let homePage;
    let shopMattressPage;
    let shippingPage;
    let billingPage;

    const url = "https://qa.levelsleep.com/";

    beforeEach(async () => {
        browser = await puppeteer.launch(puppeteerConfig);
        page = await browser.newPage();
        homePage = new HomePage(page);
        shopMattressPage = new ShopMattressPage(page);
        shippingPage = new ShippingPage(page);
        billingPage = new BillingPage(page);
    });

    afterEach(async () => {
        await browser.close();
    });

    test("Purchase mattress test", async () => {
        const cardNumber = "4242 4242 4242 4242";
        const expireDate = "10/25";
        const securityCode = "911";

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
        await billingPage.fillCardNumber(cardNumber);
        await billingPage.fillExpireDate(expireDate);
        await billingPage.fillSecurityCode(securityCode);
        await page.screenshot({ path: "billingPage.jpg", fullPage: true });
    });

})