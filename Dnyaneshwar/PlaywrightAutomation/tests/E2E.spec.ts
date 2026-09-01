import {expect, test} from '@playwright/test'

test("login to website",async ({page})=>{

    const product=page.locator(".card-body");
    const productName='ZARA COAT 3';

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("#userEmail").fill("dnyaneshwar.dandale77@gmail.com");
    await page.locator("#userPassword").fill("Prakash@123")
    await page.locator('[type="submit"]').click();
    await page.waitForLoadState('networkidle')
    var title=await page.locator('.card-body b').allTextContents();
    console.log(title)

    var count= await product.count();
for(var i=0;i<count;i++)
{
if(await product.nth(i).locator("b").textContent()===productName)
{

    await product.nth(i).locator("text= Add To Cart").click();
    break;
}
    
}

// Open the Cart and verify the product is present
await page.getByRole('button', { name: '   Cart' }).click();


});