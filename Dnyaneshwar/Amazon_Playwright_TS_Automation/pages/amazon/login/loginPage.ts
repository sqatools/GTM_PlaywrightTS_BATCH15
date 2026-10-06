import { LoginPageLocator } from './loginPageLocator';
import { Page } from '@playwright/test';

export class LoginPage extends LoginPageLocator {

    constructor(page: Page) {
        super(page);
    }

    async hoverAccountAndLists() {
        await this.AccountAndLists.hover();
    }

    async clickSignIn() {
        await this.AccountAndLists.hover();

        await this.page.waitForTimeout(1000);

        await this.SignIn.click();
    }

    async enterUsername(username: string) {
        await this.Username.fill(username);
    }

    async enterPassword(password: string) {
        await this.Password.fill(password);
    }

    async ClickSignIn() {
        await this.signInButton.click();
    }

    async clickContinue() {
        await this.ClickContinueButton.click();
    }
}