import type { Page } from "playwright";

export class CartPage {
  constructor(private readonly page: Page) {}

  async productNames(): Promise<string[]> {
    return this.page.locator('[data-test="inventory-item-name"]').allInnerTexts();
  }

  async removeProduct(name: string): Promise<void> {
    await this.product(name).locator("button").click();
  }

  async checkout(): Promise<void> {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async continueShopping(): Promise<void> {
    await this.page.locator('[data-test="continue-shopping"]').click();
  }

  private product(name: string) {
    return this.page.locator(".cart_item").filter({
      has: this.page.locator('[data-test="inventory-item-name"]', { hasText: name })
    });
  }
}
