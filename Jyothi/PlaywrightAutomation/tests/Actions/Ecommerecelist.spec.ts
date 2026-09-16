import { test } from '@playwright/test'; 
test("Get all products list", async ({ page }) => 
    { 
        await page.goto("https://automationexercise.com/");
        const products = page.locator(".features_items .col-sm-4") 
        const count = await products.count();
         console.log("Number of products:", count); 
         for (let i = 0; i < count; i++) 
            { 
                const product = products.nth(i);
                 const name = await product.locator("p").textContent();
                  const price = await product.locator("h2").textContent(); 
                  console.log(name, "-", price); 
            }
            const stylishDress = page.locator(".product-image-wrapper").filter({ hasText: "Stylish Dress" }).first();
            await stylishDress.locator("a").filter({ hasText: "Add to cart" }).click();
            await page.getByRole("button",{name:"Continue Shopping"}).waitFor()
             await page.getByRole("button",{name:"Continue Shopping"}).click()
           // const blueTop = page .locator(".product-image-wrapper") .filter({ hasText: "Blue Top" }) .first();
           // await blueTop.locator("a").filter({ hasText: "Add to cart" }).click()
           // await page.getByRole("button",{name:"Continue Shopping"}).click()
         
            await page.locator("a[href='/view_cart']").click()

        
    })

   
}
