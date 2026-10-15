import type { Page } from "playwright";

export class LoginPage {
  constructor(private readonly page: Page) {}

  async signIn(url: string, username: string, password: string): Promise<void> {
    await this.page.goto(url);
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async errorMessage(): Promise<string> {
    return (await this.page.locator('[data-test="error"]').innerText()).replace(/^Epic sadface:\s*/, "");
  }
}
