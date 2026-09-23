import {expect, test} from '@playwright/test'
test.describe("login functionality testing",()=>{
test("Login and verify", async({page})=>{
    await test.step("Launch URL in browser", async()=>{
await page.goto("https://www.saucedemo.com/");
await page.waitForLoadState('domcontentloaded');
    })

    await test.step("Enter Username and Password", async()=>{
await page.locator("(//input[@class='input_error form_input'])[1]").fill("standard_user");
await page.locator("(//input[@class='input_error form_input'])[2]").fill("secret_sauce");
    })
    await test.step("Click on Login button", async()=>{
await page.locator("//input[@class='submit-button btn_action']").click();
    })

    await test.step("verify Title of the page", async()=>{
        const logoTitle = await page.locator(".app_logo")
        expect(logoTitle).toBeVisible();

        console.log(logoTitle)
    })
})
})