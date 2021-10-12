export class ShippingPage {
    emailInput = "#email";
    fullNameInput = "#shippingAddress_fullName";
    addressInput = "#shippingAddress_line1";
    cityInput = "#shippingAddress_city";
    zipCodeInput = "#shippingAddress_zip";
    phoneInput = "#shippingAddress_phone";
    stateSelect = "select#shippingAddress_state";
    continueToBillingBtn = "#checkout_shipping_continue_btn:enabled";

    constructor(page) {
        this.page = page;
    }

    async fillEmail(email) {
        await (await this.page.waitForSelector(this.emailInput)).type(email);
    }

    async fillFullName(fullName) {
        await (await this.page.waitForSelector(this.fullNameInput)).type(fullName);
    }

    async fillAddress(address) {
        await (await this.page.waitForSelector(this.addressInput)).type(address);
    }

    async fillCity(city) {
        await (await this.page.waitForSelector(this.cityInput)).type(city);
    }

    async fillZipCode(zipCode) {
        await (await this.page.waitForSelector(this.zipCodeInput)).type(zipCode);
    }

    async fillPhoneNumber(phoneNumber) {
        const phoneNumberInput = await this.page.waitForSelector(this.phoneInput);
        await phoneNumberInput.click();
        await phoneNumberInput.type(phoneNumber);
    }

    async selectState(state) {
        await this.page.select(this.stateSelect, state);
    }

    async continueToBilling() {
        await this.page.waitForNetworkIdle();
        const continueToBillingBtn = await this.page.waitForSelector(this.continueToBillingBtn);

        await Promise.all([
            this.page.waitForNavigation({
                waitUntil: ["load"],
            }),
            continueToBillingBtn.click()
        ]);

    }
}