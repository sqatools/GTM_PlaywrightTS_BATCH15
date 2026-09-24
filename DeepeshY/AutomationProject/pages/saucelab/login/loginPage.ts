import { loginPageLocators } from "./loginPageLocators.ts";
import {Page} from '@playwright/test'

export class LoginPage extends loginPageLocators {
    constructor(page: Page) {
        super(page)
    }
    
    async login(username: string, password: string) {
        await this.UsernameField.fill(username)
        await this.PasswordField.fill(password)
        await this.loginButton.click()
    }
}