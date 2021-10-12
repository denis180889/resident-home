export class ShopMattressPage {
    addToCartButton = "button[data-testid=addtocart_btn]";
    modalCloseButton = ".close-button_3A3";

    constructor(page) {
        this.page = page;
    }

    async addToCart() {
        await (await this.page.waitForSelector(this.addToCartButton, { visible: true })).click();
        const modalDialogStatus = await this.page.waitForSelector(this.modalCloseButton, { hidden: false, timeout: 1000 });
        if (modalDialogStatus) {
            await this.page.click(this.modalCloseButton);
            await (await this.page.waitForSelector(this.addToCartButton, { visible: true })).click();
        }
    }
}