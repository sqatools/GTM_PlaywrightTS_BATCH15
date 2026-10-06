import { BasePage } from "../../common/BasePage";
import { Page } from "@playwright/test";

export class LoginPageLocator extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    get AccountAndLists() {
        return this.page.locator("#nav-link-accountList");
    }

    get SignIn() {
        return this.page.locator(".nav-action-signin-button");
    }

    get Username() {
        return this.page.locator("#ap_email_login");
    }

    get ClickContinueButton() {
        return this.page.locator(".a-button-input");
    }

    get Password() {
        return this.page.locator("#ap_password");
    }

    get signInButton() {
        return this.page.locator("#signInSubmit");
    }
}