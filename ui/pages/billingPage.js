export class BillingPage {
    cardNumberFrame = "#card-number iframe"
    cardNumberInput = "input.InputElement[name=cardnumber]";
    expireDateFrame = "#card-expiry iframe";
    expireDateInput = "input.InputElement[name=exp-date]";
    securityCodeFrame = "#card-cvc iframe";
    securityCodeInput = "input.InputElement[name=cvc]";

    constructor(page) {
        this.page = page;
    }

    async fillCardNumber(cardNumber) {
        const cardNumberFrame = await (await this.page.waitForSelector(this.cardNumberFrame)).contentFrame();
        await cardNumberFrame.type(this.cardNumberInput, cardNumber, { delay: 100 });
    }

    async fillExpireDate(date) {
        const expireDateFrame = await (await this.page.waitForSelector(this.expireDateFrame)).contentFrame();
        await expireDateFrame.type(this.expireDateInput, date, { delay: 100 });
    }

    async fillSecurityCode(code) {
        const securityCodeFrame = await (await this.page.waitForSelector(this.securityCodeFrame)).contentFrame();
        await securityCodeFrame.type(this.securityCodeInput, code, { delay: 100 });
    }
}