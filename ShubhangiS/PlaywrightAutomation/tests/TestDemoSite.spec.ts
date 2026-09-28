import {test, expect} from '@playwright/test'

test.describe("Playwright Actions", async()=> {
    test('Test 1', async ({ page }) => {
        const url = 'https://automationexercise.com/';
        await page.goto(url, { waitUntil: 'load', timeout: 60000 });

        // get all products on the page
        const products = await page.$$('.product-image-wrapper');
        console.log(`Total products on the page: ${products.length}`);

        const firstProduct = page.locator('.product-image-wrapper').first();
        await firstProduct.scrollIntoViewIfNeeded({ timeout: 10000 });
        // hover so the 'Add to cart' button becomes visible
        await firstProduct.hover();

        // select the visible add-to-cart button inside the first product
        const addBtn = firstProduct.locator('a.add-to-cart').first();
        await addBtn.waitFor({ state: 'visible', timeout: 7000 });
        await addBtn.click();

        // wait for the modal with Continue Shopping to appear and click it
        const continueBtn = page.locator('button:has-text("Continue Shopping")').first();
        await continueBtn.waitFor({ state: 'visible', timeout: 7000 });
        await continueBtn.click();

    });
});
