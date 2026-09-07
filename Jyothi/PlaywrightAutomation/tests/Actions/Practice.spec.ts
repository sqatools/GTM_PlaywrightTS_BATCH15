import {test} from '@playwright/test'

    test("Login page",async({page})=>
    {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.waitForTimeout(3_000)
        const Username=await page.getByPlaceholder("Username").fill("Admin")
        const Password=await page.getByPlaceholder("Password").fill("admin123")
        const Login=await page.getByRole("button",{name:"Login"}).click()

    })


