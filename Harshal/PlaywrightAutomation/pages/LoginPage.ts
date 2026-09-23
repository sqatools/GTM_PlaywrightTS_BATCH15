import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly dashboardText: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#loginBtn');
        this.dashboardText = page.locator('text=Dashboard');
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(user: string) {
        await this.username.fill(user);
    }

    async enterPassword(pass: string) {
        await this.password.fill(pass);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async login(user: string, pass: string) {
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickLogin();
    }

    async verifyDashboardVisible() {
        await expect(this.dashboardText).toBeVisible();
    }
}