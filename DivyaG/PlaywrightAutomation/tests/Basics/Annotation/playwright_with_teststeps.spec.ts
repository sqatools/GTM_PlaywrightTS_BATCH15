import {test, expect} from '@playwright/test'

test.describe("Login functionality testing",()=>{

    test("sauce demo login and verify", async({page})=>{
        test.step("Launch URL", async({})=>{
            await page.goto("https://www.saucedemo.com/");
            await page.waitForLoadState("domcontentloaded");
        })

        await test.step("Enter credentials Username and password",async()=>{
           await page.locator('#user-name').fill("standard_user");
           await page.getByPlaceholder('Password').fill("secret_sauce");
        })

        await test.step("Login successfully", async()=>{
            await page.getByRole("button", {name: "Login"}).click();

        })

        await test.step("verify login successful", async()=>{
        const logo = page.locator(".app_logo");
        await expect (logo).toBeVisible();
        })

    })

})