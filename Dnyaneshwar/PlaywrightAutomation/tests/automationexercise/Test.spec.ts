import { test,expect } from '@playwright/test';

test("add product to cart", async ({ page }) => {

    await page.goto('https://automationexercise.com/products');

    const products = await page.locator('.single-products').all();

    for (const items of products) {

        const productName = await items.locator("p").first().textContent();
        const productPrice = await items.locator("h2").first().textContent();

        console.log(productName);
        console.log(productPrice);

        if (
            productName?.trim() === 'Blue Top' ||
            productName?.trim() === 'Men Tshirt' ||
            productName?.trim()=== 'Sleeveless  Dress' ||
            productName?.trim()== 'Stylish Dress'||
            productName?.trim()==='Winter Top' ||
            productName?.trim() == 'Summer White Top'
        ) {

            await items.locator('.productinfo .add-to-cart').click();

            console.log(productName, 'added to cart');

            // Close Added popup
            await page.locator('button.close-modal').click();
            
        }
    }

    // Click Cart from navigation bar
    
    await page.locator('ul.navbar-nav a[href="/view_cart"]').click();

    // Delete a single product 
     //await page.locator('.cart_quantity_delete').first().click();


     // verify blue top is added to cart

     await expect(page.getByText('Blue Top', { exact: true })).toBeVisible();

     // Delete all products from the cart

     
     const deleteButtons = await page.locator('.cart_quantity_delete').all();

     for (const deleteButton of deleteButtons) {
   await deleteButton.click();
}
});