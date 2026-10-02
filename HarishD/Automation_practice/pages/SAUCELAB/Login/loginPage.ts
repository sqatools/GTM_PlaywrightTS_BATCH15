import { loginpagelocator } from "./loginPageLocator.ts";
import { Page, expect } from '@playwright/test';

export class Loginpage extends loginpagelocator {
    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {
        await this.UsernameFiled.fill(username);
        await this.PasswordFiled.fill(password);
        await this.LoginButton.click();
    }

    async VerifyDashBoardHeading() {
        await expect(this.DashBoard).toBeVisible();
    }
}