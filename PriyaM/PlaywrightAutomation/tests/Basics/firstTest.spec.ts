import { test, expect } from '@playwright/test';

test("Add item to cart and checkout", async ({page}) => {

    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator("//*[@id='Layer_1']").isVisible();
    await page.locator("//*[@id='search-query']").click();
    await page.locator("//*[@id='search-query']").fill("hammer");
    await page.locator("//*[@data-test='search-submit']").click();
    await page.locator("//*[@alt='Hammer']").click()
    await page.locator("//span[text()='Hammer']").isVisible();
    await page.waitForTimeout(5000)
   // await page.locator("//*[@id='btn-add-to-cart']").click();
    await page.getByRole('button', { name: 'Add to cart' }).click();

    const successMessage = page.getByRole('alert', { name: 'Product added to shopping cart.' });
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Product added to shopping cart.');

    // const successMessage = page.getByText('Product added to shopping cart');
    // await expect(successMessage).toBeVisible();
    // const msg = await page.locator("//*[id='toast-container']").textContent()

    

})