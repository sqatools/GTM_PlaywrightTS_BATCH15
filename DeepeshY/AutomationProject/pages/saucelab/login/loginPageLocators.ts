import {Page} from '@playwright/test'
import { BasePage } from '../../common/BasePage.ts';

export class loginPageLocators extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    get UsernameField() {
        return this.page.getByPlaceholder("Username")
    }

    get PasswordField() {
        return this.page.getByPlaceholder("Password")
    }

    get loginButton() {
        return this.page.locator("#login-button")
    }

    get DashboadingHeading() {
        return this.page.locator(".app_logo")
    }
}