
import { Locator, Page, expect } from '@playwright/test'

import { LoginPageLocators } from './LoginPageLocator.ts'


export class LoginPage extends LoginPageLocators {

    constructor(page: Page) {
        super(page)
    }

    async enterUserName(username: string) {
        await this.UsernameFiled.fill(username)
    }

    async enterpasswordName(password: string) {
        await this.PasswordFiled.fill(password)
    }

    async clickLoginButton() {
        await this.LoginButton.click()
    }

    async VerifyDashboardHeading() {
        await expect(this.DashBoard).toBeVisible()
    }

    async login(user: string, pass: string) {
        await this.enterUserName(user)
        await this.enterpasswordName(pass)
        await this.clickLoginButton()
    }

}

