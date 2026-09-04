import { test } from '@playwright/test';

test("add product to card ", async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  const products = await page.locator("div.features_items > div.col-sm-4").all();
  for (var items of products) {

    const productName = await items.locator("p").first().textContent();
    const productPrice = await items.locator("h2").first().textContent();

    console.log(productName);
    console.log(productPrice);

    if (
      productName?.trim() === 'Blue Top' ||
      productName?.trim() === 'Men Tshirt'
    ) {
      await items.locator('.add-to-cart').first().click();

      console.log(productName, 'added to cart');

    }
    else if (productName?.trim() === 'Women Tshirt') {
      await items.locator('.add-to-cart').first().click();

      console.log(productName, 'added to cart');
    }
  }
 // await page.getByText("View Cart").click();

  //await page.locator(".cart_quantity_delete").click();

})