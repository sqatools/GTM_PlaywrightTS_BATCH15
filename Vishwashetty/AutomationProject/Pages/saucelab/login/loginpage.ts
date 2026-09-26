import {LoginPageLocators} from './loginpagelocators';
import {Page} from '@playwright/test'
export class LoginPage extends LoginPageLocators {
    constructor(page: Page) {
        super(page);
    }
    async login(username: string, password: string) {
        await this.FirstNameField.fill(username);
        await this.FirstPasswordField.fill(password);
        await this.LoginButton.click();
    }
    async verifydashboardheading() {
        return this.DashboardHeading;
    }
}