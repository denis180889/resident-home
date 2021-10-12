import { ifElementExist } from "../helpers/puppeteerHelper"

export class ShopMattressPage {
    addToCartButton = "button[data-testid=addtocart_btn]";
    modalCloseButton = ".product-preview_3YI > .close-button--desktop_3_F";

    constructor(page) {
        this.page = page;
    }

    async addToCart() {
        await (await this.page.waitForSelector(this.addToCartButton, { visible: true })).click();

        if (await ifElementExist(this.modalCloseButton, this.page, 1000)) {
            await (await this.page.waitForSelector(this.modalCloseButton)).click();
            await (await this.page.waitForSelector(this.addToCartButton)).click();
        }
    }
}