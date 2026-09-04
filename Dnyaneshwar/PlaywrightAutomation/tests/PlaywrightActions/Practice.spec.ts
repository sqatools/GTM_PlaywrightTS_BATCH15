import { test, expect } from '@playwright/test';

test('Get all product and prices', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    const product: any = await page.locator("div.features_items >div.col-sm-4").all();

    for (var item of product) {
        console.log(await item.locator("p").first().textContent())
        console.log(await item.locator("h2").first().textContent())
    }

});

test('Add product to cart ', async ({ page }) => {

    await page.goto('https://automationexercise.com/products');

    const product1 = page.locator('.single-products').filter({
        hasText: 'Blue Top'
    }).first();

    const productName = await product1.locator('p').first().textContent();
    const price = await product1.locator('h2').first().textContent();

    console.log('Product Name:', productName);
    console.log('Price:', price);

    // Click Add to Cart
    await product1.locator('.add-to-cart').first().click({ force: true });


    

});