import {Page, Locator, expect} from '@playwright/test'
import {LoginPageLocators} from './LoginPageLocators.ts'

export class LoginPage extends LoginPageLocators {

    constructor(page: Page) {
        super(page)
    }

    async enterUsername(username: string) {
        await this.usernameField.fill(username)
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async verifyDashboardHeading() {
        await expect(this.dashboardHeading).toBeVisible()
    }

    async login(user: string, pass: string) {
        await this.enterUsername(user)
        await this.enterPassword(pass)
        await this.clickLoginButton()
    }

}