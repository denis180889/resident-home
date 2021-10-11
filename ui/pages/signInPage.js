export class SignInPage {
    emailInput = "#email";
    passInput = "#passwd";
    signInSubmitButton = "#SubmitLogin";

    constructor(page) {
        this.page = page;
    }

    async fillEmail(email) {
        await this.page.type(this.emailInput, email);
    }

    async fillPassword(password) {
        await this.page.type(this.passInput, password);
    }

    async signIn(email, pass) {
        await this.fillEmail(email);
        await this.fillPassword(pass);

        const signInSubmitButton = await this.page.waitForSelector(this.signInSubmitButton, { visible: true });
        if (!signInSubmitButton) {
            throw new Error("Sing In button is not present");
        }

        await Promise.all([
            this.page.waitForNavigation({
                waitUntil: ["load"],
            }),
            signInSubmitButton.click()
        ]);
    }

}