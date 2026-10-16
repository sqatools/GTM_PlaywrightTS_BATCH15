import { Given, Then, When } from "@cucumber/cucumber";
import { strict as assert } from "node:assert";
import { CartPage } from "../../src/pages/cart-page";
import { CheckoutPage } from "../../src/pages/checkout-page";
import { InventoryPage } from "../../src/pages/inventory-page";
import { LoginPage } from "../../src/pages/login-page";
import { SauceDemoWorld } from "../support/world";

const password = "secret_sauce";

Given("I am on the Swag Labs login page", async function (this: SauceDemoWorld) {
  await this.page.locator('[data-test="login-button"]').waitFor();
  assert.match(this.page.url(), /saucedemo\.com/);
});

When(
  "I sign in as {string} with password {string}",
  async function (this: SauceDemoWorld, username: string, userPassword: string) {
    await new LoginPage(this.page).signIn(username, userPassword);
  }
);

When(
  "I submit the login form with username {string} and password {string}",
  async function (this: SauceDemoWorld, username: string, userPassword: string) {
    await new LoginPage(this.page).signIn(username, userPassword);
  }
);

Given("I am signed in as {string}", async function (this: SauceDemoWorld, username: string) {
  await new LoginPage(this.page).signIn(username, password);
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

Then(
  "products should be sorted by {string}",
  async function (this: SauceDemoWorld, sortOrder: string) {
    const inventory = new InventoryPage(this.page);
    switch (sortOrder) {
      case "name ascending": {
        const names = await inventory.productNames();
        assert.deepEqual(names, [...names].sort((first, second) => first.localeCompare(second)));
        break;
      }
      case "name descending": {
        const names = await inventory.productNames();
        assert.deepEqual(names, [...names].sort((first, second) => second.localeCompare(first)));
        break;
      }
      case "price ascending": {
        const prices = await inventory.productPrices();
        assert.deepEqual(prices, [...prices].sort((first, second) => first - second));
        break;
      }
      case "price descending": {
        const prices = await inventory.productPrices();
        assert.deepEqual(prices, [...prices].sort((first, second) => second - first));
        break;
      }
      default:
        throw new Error(`Unsupported sort order: ${sortOrder}`);
    }
  }
);

When("I open the {string} product", async function (this: SauceDemoWorld, name: string) {
  await new InventoryPage(this.page).openProduct(name);
});

Then("I should see the {string} product details", async function (this: SauceDemoWorld, name: string) {
  assert.equal(await this.page.locator('[data-test="inventory-item-name"]').innerText(), name);
  await this.page.locator('[data-test="inventory-item-desc"]').waitFor();
  await this.page.locator('[data-test="inventory-item-price"]').waitFor();
});

When("I add {string} to the cart", async function (this: SauceDemoWorld, name: string) {
  await new InventoryPage(this.page).addProduct(name);
});

Then("the cart badge should show {int} item", async function (this: SauceDemoWorld, count: number) {
  assert.equal(await new InventoryPage(this.page).cartBadge(), String(count));
});

Then("the cart badge should show {int} items", async function (this: SauceDemoWorld, count: number) {
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

Then("the cart should not contain {string}", async function (this: SauceDemoWorld, name: string) {
  assert.ok(!(await new CartPage(this.page).productNames()).includes(name));
});

When("I remove {string} from the cart", async function (this: SauceDemoWorld, name: string) {
  await new CartPage(this.page).removeProduct(name);
});

Then("the cart should be empty", async function (this: SauceDemoWorld) {
  assert.equal(await new CartPage(this.page).productNames().then((names) => names.length), 0);
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

Then("the order summary should contain {string}", async function (this: SauceDemoWorld, name: string) {
  assert.ok((await new CartPage(this.page).productNames()).includes(name));
  assert.match(this.page.url(), /checkout-step-two\.html/);
});

Then("the order total should equal the subtotal plus tax", async function (this: SauceDemoWorld) {
  const checkout = new CheckoutPage(this.page);
  const subtotal = await checkout.subtotal();
  const tax = await checkout.tax();
  const total = await checkout.total();
  assert.equal(Math.round((subtotal + tax) * 100), Math.round(total * 100));
});

When("I finish the order", async function (this: SauceDemoWorld) {
  await new CheckoutPage(this.page).finish();
});

Then("I should see the order confirmation", async function (this: SauceDemoWorld) {
  assert.equal(
    await this.page.locator('[data-test="complete-header"]').innerText(),
    "Thank you for your order!"
  );
});

When("I cancel checkout", async function (this: SauceDemoWorld) {
  await new CheckoutPage(this.page).cancel();
});

When("I sign out", async function (this: SauceDemoWorld) {
  const inventory = new InventoryPage(this.page);
  await inventory.openMenu();
  await inventory.signOut();
});

Then("I should be on the Swag Labs login page", async function (this: SauceDemoWorld) {
  await this.page.locator('[data-test="login-button"]').waitFor();
  assert.match(this.page.url(), /saucedemo\.com/);
});

When("I reset the application state", async function (this: SauceDemoWorld) {
  const inventory = new InventoryPage(this.page);
  await inventory.openMenu();
  await inventory.resetApplicationState();
});
