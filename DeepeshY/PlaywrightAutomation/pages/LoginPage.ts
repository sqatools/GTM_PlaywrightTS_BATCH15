import {Page, Locator, expect} from '@playwright/test'

export class LoginPage {
    readonly page: Page 
    readonly usernameField : Locator
    readonly passwordField : Locator
    readonly loginButton : Locator
    readonly headingDashboard : Locator

    constructor(page: Page) {
        this.page = page
        this.usernameField = this.page.getByPlaceholder("Username")
        this.passwordField = this.page.getByPlaceholder("Password")
        this.loginButton = this.page.locator("#login-button")
        this.headingDashboard = this.page.locator(".app_logo")
    }

    async gotoLoginPage(url: string) {
        await this.page.goto(url)
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
        await expect(this.headingDashboard).toBeVisible()
    }

    async login(user: string, pass: string) {
        await this.enterUsername(user)
        await this.enterPassword(pass)
        await this.clickLoginButton()
    }

}