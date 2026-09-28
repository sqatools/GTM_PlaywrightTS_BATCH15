import {Page, Locator, expect} from '@playwright/test'
import {LoginPageLocator} from './LoginPageLocator.ts'


export class LoginPage extends LoginPageLocator{
    // readonly page: Page 
    // readonly usernameField : Locator
    // readonly passwordField : Locator
    // readonly loginButton : Locator
    // readonly headingDashboard : Locator

    constructor(page: Page) {
        super(page)

        // this.page = page
        // this.usernameField = page.getByPlaceholder("Username")
        // this.passwordField = page.getByPlaceholder("Password")
        // this.loginButton =   page.locator("#login-button")
        // this.headingDashboard = page.locator(".app_logo")
    }

    // async gotoLoginPage(url: string) {
    //     await this.page.goto(url)
    // }

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