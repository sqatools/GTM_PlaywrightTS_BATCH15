import {test, BrowserContext, Page} from '@playwright/test'

test.describe("Window Handle", async ()=>{
    test("1st scenario 1 browser 2 tabs", async({browser})=> {
        const context: BrowserContext= await browser.newContext()
        const page1: Page =await context.newPage()
        const page2: Page =await context.newPage()

        await page1.goto("https://sqatools.in/dummy-booking-website/")
        await page2.goto("https://sqatools.in/automation-practice-page/")
        await page1.locator("#firstname").first().fill("naina")
        await page1.locator("#firstname").last().fill("Hulke")
        await page1.waitForTimeout(5_000)

        await page2.locator("#username").fill("naina")
        await page2.locator("#password").fill("hulke")

    });

    test("2nd scenario 2 browser instance and 2 tabs", async({browser})=>{
        const context1: BrowserContext =await browser.newContext()
         const context2: BrowserContext =await browser.newContext()
         const page1: Page =await context1.newPage()
         const page2: Page =await context1.newPage()
       await page1.goto("https://www.saucedemo.com/")
       await page1.getByPlaceholder("Username").fill("standard_user")
       await page1.getByPlaceholder("Password").fill("secret_sauce")
       await page1.getByRole("button", {name: 'Login'})


        await page2.goto("https://www.saucedemo.com/")
        await page2.getByPlaceholder("Username").fill("standard_user")
       await page2.getByPlaceholder("Password").fill("secret_sauce")
       await page2.getByRole("button", {name: 'Login'})

       await page1.reload()
       await page2.reload()
       await page1.waitForTimeout(5_000)
    })
})