import type { Page } from "playwright";

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async productNames(): Promise<string[]> {
    return this.page.locator('[data-test="inventory-item-name"]').allInnerTexts();
  }

  async productPrices(): Promise<number[]> {
    const prices = await this.page.locator('[data-test="inventory-item-price"]').allInnerTexts();
    return prices.map((price) => Number(price.replace("$", "")));
  }

  async sortBy(label: string): Promise<void> {
    const options: Record<string, string> = {
      "Name (A to Z)": "az",
      "Name (Z to A)": "za",
      "Price (low to high)": "lohi",
      "Price (high to low)": "hilo"
    };
    const value = options[label];
    if (!value) {
      throw new Error(`Unsupported product sort option: ${label}`);
    }
    await this.page.locator('[data-test="product-sort-container"]').selectOption(value);
  }

  async addProduct(name: string): Promise<void> {
    await this.product(name).locator("button").click();
  }

  async openProduct(name: string): Promise<void> {
    await this.product(name).locator('[data-test="inventory-item-name"]').click();
  }

  async openCart(): Promise<void> {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async cartBadge(): Promise<string | null> {
    const badge = this.page.locator('[data-test="shopping-cart-badge"]');
    return await badge.count() ? badge.innerText() : null;
  }

  async openMenu(): Promise<void> {
    await this.page.getByRole("button", { name: "Open Menu" }).click();
  }

  async signOut(): Promise<void> {
    await this.page.locator('[data-test="logout-sidebar-link"]').click();
  }

  async resetApplicationState(): Promise<void> {
    await this.page.locator('[data-test="reset-sidebar-link"]').click();
  }

  private product(name: string) {
    return this.page.locator(".inventory_item").filter({
      has: this.page.locator('[data-test="inventory-item-name"]', { hasText: name })
    });
  }
}
