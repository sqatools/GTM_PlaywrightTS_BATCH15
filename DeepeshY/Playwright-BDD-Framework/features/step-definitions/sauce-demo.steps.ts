import { Given, Then, When } from "@cucumber/cucumber";
import { strict as assert } from "node:assert";
import { CartPage } from "../../src/pages/cart-page";
import { CheckoutPage } from "../../src/pages/checkout-page";
import { InventoryPage } from "../../src/pages/inventory-page";
import { LoginPage } from "../../src/pages/login-page";
import { SauceDemoWorld } from "../support/world";

const password = "secret_sauce";

Given("I am on the SauceDemo login page", async function (this: SauceDemoWorld) {
  assert.match(this.page.url(), /saucedemo\.com/);
  await this.page.locator('[data-test="login-button"]').waitFor();
});

When(
  "I sign in as {string} with password {string}",
  async function (this: SauceDemoWorld, url: string, username: string, userPassword: string) {
    await new LoginPage(this.page).signIn(url, username, userPassword);
  }
);

When(
  "I submit the login form with username {string} and password {string}",
  async function (this: SauceDemoWorld, url: string, username: string, userPassword: string) {
    await new LoginPage(this.page).signIn(url, username, userPassword);
  }
);

Given("I am signed in as {string}", async function (this: SauceDemoWorld, username: string) {
  await new LoginPage(this.page).signIn("https://www.saucedemo.com", username, password);
  await this.page.locator('[data-test="inventory-container"]').waitFor();
});

Then("I should see the product catalog", async function (this: SauceDemoWorld) {
  await this.page.locator('[data-test="inventory-container"]').waitFor();
  assert.equal(await this.page.locator(".inventory_item").count(), 6);
});

Then("I should see the login error {string}", async function (this: SauceDemoWorld, expected: string) {
  assert.equal(await new LoginPage(this.page).errorMessage(), expected);
});

Then("I should see {int} products in the catalog", async function (this: SauceDemoWorld, count: number) {
  assert.equal(await this.page.locator(".inventory_item").count(), count);
});

When("I sort products by {string}", async function (this: SauceDemoWorld, label: string) {
  await new InventoryPage(this.page).sortBy(label);
});

Then("products should be sorted by price in ascending order", async function (this: SauceDemoWorld) {
  const prices = await new InventoryPage(this.page).productPrices();
  assert.deepEqual(prices, [...prices].sort((first, second) => first - second));
});

Then("products should be sorted by name in descending order", async function (this: SauceDemoWorld) {
  const names = await new InventoryPage(this.page).productNames();
  assert.deepEqual(names, [...names].sort((first, second) => second.localeCompare(first)));
});

When("I add {string} to the cart", async function (this: SauceDemoWorld, name: string) {
  await new InventoryPage(this.page).addProduct(name);
});

Then("the cart badge should show {int} item", async function (this: SauceDemoWorld, count: number) {
  assert.equal(await new InventoryPage(this.page).cartBadge(), String(count));
});

Then("the cart badge should not be visible", async function (this: SauceDemoWorld) {
  assert.equal(await new InventoryPage(this.page).cartBadge(), null);
});

When("I open the cart", async function (this: SauceDemoWorld) {
  await new InventoryPage(this.page).openCart();
});

Then("the cart should contain {string}", async function (this: SauceDemoWorld, name: string) {
  assert.ok((await new CartPage(this.page).productNames()).includes(name));
});

When("I remove {string} from the cart", async function (this: SauceDemoWorld, name: string) {
  await new CartPage(this.page).removeProduct(name);
});

Then("the cart should be empty", async function (this: SauceDemoWorld) {
  assert.equal(await this.page.locator(".cart_item").count(), 0);
});

When("I choose to continue shopping", async function (this: SauceDemoWorld) {
  await new CartPage(this.page).continueShopping();
});

Given("I start checkout", async function (this: SauceDemoWorld) {
  await new CartPage(this.page).checkout();
});

When(
  "I enter checkout details {string} {string} {string}",
  async function (this: SauceDemoWorld, firstName: string, lastName: string, postalCode: string) {
    await new CheckoutPage(this.page).enterDetails(firstName, lastName, postalCode);
  }
);

When("I continue checkout", async function (this: SauceDemoWorld) {
  await new CheckoutPage(this.page).continue();
});

Then("I should see the checkout error {string}", async function (this: SauceDemoWorld, expected: string) {
  assert.equal(await new CheckoutPage(this.page).errorMessage(), expected);
});

Then("the order summary should show {string}", async function (this: SauceDemoWorld, name: string) {
  assert.ok((await new CartPage(this.page).productNames()).includes(name));
  assert.match(this.page.url(), /checkout-step-two\.html/);
});

When("I finish the order", async function (this: SauceDemoWorld) {
  await new CheckoutPage(this.page).finish();
});

Then("I should see the order confirmation", async function (this: SauceDemoWorld) {
  assert.equal(await this.page.locator('[data-test="complete-header"]').innerText(), "Thank you for your order!");
});

When("I sign out", async function (this: SauceDemoWorld) {
  const inventory = new InventoryPage(this.page);
  await inventory.openMenu();
  await this.page.locator('[data-test="logout-sidebar-link"]').click();
});

Then("I should be on the SauceDemo login page", async function (this: SauceDemoWorld) {
  await this.page.locator('[data-test="login-button"]').waitFor();
  assert.match(this.page.url(), /saucedemo\.com/);
});

When("I reset the application state", async function (this: SauceDemoWorld) {
  const inventory = new InventoryPage(this.page);
  await inventory.openMenu();
  await this.page.locator('[data-test="reset-sidebar-link"]').click();
});
