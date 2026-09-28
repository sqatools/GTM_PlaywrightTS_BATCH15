import { Page } from "@playwright/test";
import { loginPageLocator } from "./LoginPageLocator";
export class LoginPage extends loginPageLocator {
    
    constructor(page: Page) {
        super(page)
    }

    async login(username: string, password: string) {

        await this.UsernameField.fill(username)
        await this.PasswordField.fill(password)
        await this.loginButton.click()
        await this.DashboadingHeading.click();

    }
}
