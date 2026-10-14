import type { Page } from "playwright";

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async enterDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
  }

  async continue(): Promise<void> {
    await this.page.locator('[data-test="continue"]').click();
  }

  async errorMessage(): Promise<string> {
    return this.page.locator('[data-test="error"]').innerText();
  }

  async finish(): Promise<void> {
    await this.page.locator('[data-test="finish"]').click();
  }
}
