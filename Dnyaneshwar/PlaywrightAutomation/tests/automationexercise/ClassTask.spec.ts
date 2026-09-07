import {test,expect} from '@playwright/test';

   test("fill the form",async({page})=>{
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(5_000);
    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole("button",{name:'Login'}).click();


     await page.locator("ul.oxd-main-menu span.oxd-text").first().click();

     await page.locator("oxd-button").nth(3).click();
})