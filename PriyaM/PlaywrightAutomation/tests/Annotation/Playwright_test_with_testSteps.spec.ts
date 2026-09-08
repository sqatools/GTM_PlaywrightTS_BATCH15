import  {expect, test} from '@playwright/test'

test.describe("Login Functionlity testing", ()=> { 
    test("Sauce login and verify", async({page}) => {
        await test.step("Launch url in browser", async()=> {
            await page.goto("https://www.saucedemo.com/");
            await page.waitForLoadState("domcontentloaded");
        });

        await test.step("Enter credentials and verify", async()=> {
            await page.getByPlaceholder("Username").fill("standard_user")
            await page.getByPlaceholder("Password").fill("secret_sauce")
        })

        await test.step("click on login button", async()=> {
            await page.getByRole("button", {name: "Login"}).click()
        })

        await test.step("verify login successfully", async()=> {
            const logo = page.locator(".app_logo")
            await expect(logo).toBeVisible()
        })
    })


})