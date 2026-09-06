import {expect, test} from '@playwright/test'
test.describe("login functionality tetsing", ()=>{
    test("sauce login and verify", async ({page}) => {
    await test.step("launch url in browser", async() =>{
    await page.goto("https://www.saucedemo.com")

    await page.waitForLoadState("domcontentloaded")
});
 await test.step("Enter credentials and verify", async ()=> {
    await page.getByPlaceholder("Username").fill("standard_user")

    await page.getByPlaceholder("Password").fill("secret_sauce")
 })
 await test.step("click on login button", async() =>{
    await page.getByRole("button", {name: "login"}).click()
 })

 await test.step("verify login succesfully", async() =>{
    const logo = page.locator(".app_logo") //swag lab logo
    await expect(logo).toBeVisible()
 })
    })
})