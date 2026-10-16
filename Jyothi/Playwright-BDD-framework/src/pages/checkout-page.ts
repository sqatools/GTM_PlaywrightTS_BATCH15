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

  async subtotal(): Promise<number> {
    return this.money('[data-test="subtotal-label"]');
  }

  async tax(): Promise<number> {
    return this.money('[data-test="tax-label"]');
  }

  async total(): Promise<number> {
    return this.money('[data-test="total-label"]');
  }

  async finish(): Promise<void> {
    await this.page.locator('[data-test="finish"]').click();
  }

  async cancel(): Promise<void> {
    await this.page.locator('[data-test="cancel"]').click();
  }

  private async money(selector: string): Promise<number> {
    const label = await this.page.locator(selector).innerText();
    const amount = label.match(/\$([\d.]+)/)?.[1];
    if (!amount) {
      throw new Error(`Could not read amount from checkout label: ${label}`);
    }
    return Number(amount);
  }
}
