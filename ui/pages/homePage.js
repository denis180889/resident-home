export class HomePage {
    shopMattressButton = "a[data-testid=shop_mattress_button]";

    constructor(page) {
        this.page = page;
    }

    async goToHomePage(url) {
        await this.page.goto(url, {
            waitUntil: ["load"],
        });
    }

    async goToShopMattressPage() {
        const shopMattressButton = await this.page.waitForSelector(this.shopMattressButton, { visible: true });
        if (!shopMattressButton) {
            throw new Error("Shop mattress button is not present");
        }

        await Promise.all([
            this.page.waitForNavigation({
                waitUntil: ["load"],
            }),
            shopMattressButton.click()
        ]);
    }

}