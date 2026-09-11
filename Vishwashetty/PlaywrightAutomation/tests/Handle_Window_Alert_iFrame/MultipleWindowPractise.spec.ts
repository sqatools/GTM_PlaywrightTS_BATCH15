import {test, BrowserContext, Page, chromium, firefox} from '@playwright/test';

test.describe("handle multiple browser windows", async()=> {

    test("Scenario 1: One browser and 2 tabs", async({browser}) => {
        test.setTimeout(60_000)
        const context: BrowserContext = await browser.newContext()
        const page1: Page = await context.newPage()  
        const page2: Page = await context.newPage() 
        await page1.goto("https://sqatools.in/dummy-booking-website/")
        await page2.goto("https://sqatools.in/automation-practice-page/")
        await page1.locator("#fromcity").fill("Mumbai")
        await page1.locator("#destcity").fill("Pune")
        await page2.getByPlaceholder("Enter username").fill("facebookuser@gmail.com")
        await page2.getByPlaceholder("Enter password").fill("User@12345")
    })
    test("Scenario 2: 2 browser and 2 tabs", async({browser}) => {
        test.setTimeout(60_000)
        const context1: BrowserContext = await browser.newContext()
        const context2: BrowserContext = await browser.newContext()

        const page1: Page = await context1.newPage()
        const page2: Page = await context2.newPage()
        await page1.goto("https://sqatools.in/dummy-booking-website/")
        await page2.goto("https://sqatools.in/automation-practice-page/")
        await page1.locator("#fromcity").fill("Mumbai")
        await page1.locator("#destcity").fill("Pune")
        await page2.getByPlaceholder("Enter username").fill("facebookuser@gmail.com")
        await page2.getByPlaceholder("Enter password").fill("User@12345")
    })
    test("Scenario 3: One browser and tabs with click event", async({browser}) => {
        test.setTimeout(60_000)
        const context: BrowserContext = await browser.newContext()
        const page1: Page = await context.newPage()  
        await page1.goto("https://sqatools.in/dummy-booking-website/")
        
        const [newPage] = await Promise.all([page1.waitForEvent("popup"),
        await page1.getByRole("link", {name: "Login Page"}).first().click()
        ])
              const page2 = newPage
         await page2.getByPlaceholder("Email address or phone number").fill("faceuser2@gmail.com")
        await page2.getByPlaceholder("Password").fill("user@12345")
        await page2.getByRole("button", {name: "Log in"}).click()

        await page1.getByPlaceholder("Enter username").fill("User1@gmail.com")
        await page1.getByPlaceholder("Enter password").fill("user@12345")

        
    })
    test("Scenario 4: two different browser instance and 2 tabs", async({browser}) => {
        test.setTimeout(60_000)

        //const browser1 = await chromium.launch({headless: false})
        const browser2 = await firefox.launch({headless: false})
       // const context1: BrowserContext = await browser1.newContext()
        const context2: BrowserContext = await browser2.newContext()

        //const page1: Page = await context1.newPage()  
        const page2: Page = await context2.newPage() 
        
       // await page1.goto("https://sqatools.in/dummy-booking-website/")
        await page2.goto("https://sqatools.in/automation-practice-page/")
       // await page1.locator("#fromcity").fill("Mumbai")
        //await page1.locator("#destcity").fill("Pune")
        await page2.getByPlaceholder("Enter username").fill("facebookuser@gmail.com")
        await page2.getByPlaceholder("Enter password").fill("User@12345")
    })
})