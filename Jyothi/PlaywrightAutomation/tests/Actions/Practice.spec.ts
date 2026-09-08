import {test} from '@playwright/test'

    test("Login page",async({page})=>
    {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.waitForTimeout(6000)
        const Username=await page.getByPlaceholder("Username").fill("Admin")
        const Password=await page.getByPlaceholder("Password").fill("admin123")
        const Login=await page.getByRole("button",{name:"Login"}).click()
           await page.locator("//span[text()='Admin']").click()
           await page.getByRole("button",{name:'Add'}).click()
         await page.locator(".oxd-select-text").nth(0).click()
         await page.locator(".oxd-select-option").filter({hasText: "Admin" }).click()
         await page.getByPlaceholder("Type for hints...").fill("Peter Mac Anderson")
         await page.waitForTimeout(1000)
        await page.getByText("Peter Mac Anderson", {exact: true }).last().click()
        await page.locator(".oxd-select-text").nth(1).click()
        await page.locator(".oxd-select-option").filter({hasText:"Enabled" }).click()
        await page.locator('.oxd-input-group').filter({ hasText: 'Username' }).locator('input').fill('Jyothihetu')
        // Password 
         await page.locator('input[type="password"]').nth(0).fill("Test@12345") 
        // // Confirm Password 
        await page.locator('input[type="password"]').nth(1).fill("Test@12345")
         // Save 
        await page.getByRole("button", { name: "Save" }).click()
    })


