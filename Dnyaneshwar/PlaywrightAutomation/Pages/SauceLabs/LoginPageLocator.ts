import { Page } from "@playwright/test";

import { BasePage } from '../Common/BasePage';

export class LoginPageLocator extends BasePage {

    constructor(page: Page) {

        super(page)

    }

    get UserNameFieled() {
        return this.page.getByPlaceholder("Username")
    }

    get PasswordField() {
        return this.page.getByPlaceholder("Password")
    }

    get Loginbutton() {
        return this.page.locator("#login-button")
    }

    get DashboardHeading() {

        return this.page.locator(".app_logo")

    }

}