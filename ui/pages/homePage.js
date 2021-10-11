export class HomePage {
    signInButton = "a.login";

    constructor(page) {
        this.page = page;
    }

    async goToHomePage(url) {
        await this.page.goto(url, {
            waitUntil: ["load"],
        });
    }

    async goToSignInPage() {
        const signInButton = await this.page.waitForSelector(this.signInButton, { visible: true });
        if (!signInButton) {
            throw new Error("Sing In button is not present");
        }

        await Promise.all([
            this.page.waitForNavigation({
                waitUntil: ["load"],
            }),
            signInButton.click()
        ]);
    }

}