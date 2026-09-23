import { Locator, Page } from "@playwright/test";
import {BasePage} from '../common/basePage.ts'

export class LoginPageLocators extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get usernameField() {
        return this.page.getByPlaceholder("Username")
    }

    get passwordField() {
        return this.page.getByPlaceholder("Password")
    }

    get loginButton() {
        return this.page.locator("#login-button")
    }

    get dashboardHeading() {
        return this.page.locator(".app_logo")
    }
}