import{test, BrowserContext, Page, chromium, firefox} from '@playwright/test'
import { promises } from 'node:dns';

test.describe("Handle multiple window",async()=>{


    test("Scenerio 1: One Browser and two Tab's",async({browser})=>{


       const context:BrowserContext= await browser.newContext(); // create new browser instance

       const page1 :Page= await context.newPage(); // creaated page 1 

       const page2:Page= await context.newPage(); // created page 2

       // page open webside 

       await page1.goto("https://www.amazon.in/");

       await page1.getByPlaceholder("Search Amazon.in").fill("samsung")

       await page2.goto("https://www.facebook.com/AmazonIN");

       await page2.getByText('Email address or phone number').fill("ddd")

       await page1.waitForTimeout(3_000)

    })

    test("Scenerio:2 Two Browser Instance and two tab",async({browser})=>{

        

       const context1 :BrowserContext= await browser.newContext();
       const context2: BrowserContext =await browser.newContext();

       const page1 :Page= await context1.newPage();
       const page2 :Page= await context2.newPage();

       await page1.goto("https://www.saucedemo.com/")


       await page1.getByPlaceholder("Username").fill("standard_user")

       await page1.getByPlaceholder("Password").fill("secret_sauce")

       await page1.locator("#login-button").click();

      // await page1.waitForTimeout(3_000)

       await page2.goto("https://www.saucedemo.com/")

        await page2.getByPlaceholder("Username").fill("problem_user")

        await page2.getByPlaceholder("Password").fill("secret_sauce")

        await page2.locator("#login-button").click();

        await page2.reload()
        await page1.reload();

        await page2.waitForTimeout(10_000)

    })

    test("Scenerio:3 One browser and Tab with Click Event",async({browser})=>{


       const context:BrowserContext= await browser.newContext();

      const page1 :Page= await context.newPage();

      // open Automation website on page 1

      await page1.goto("https://sqatools.in/automation-practice-page/")

       const [newPage] = await Promise.all([page1.waitForEvent("popup"), 
       page1.getByRole("link", {name: "Login Page"}).first().click()])

       const page2 = newPage
       await page2.getByPlaceholder("Email address or phone number").fill("user1@gmail.com");

       await page2.getByPlaceholder("Password").fill("user@123")

       await page2.getByRole("button",{name:'Log in'}).click();

       await page1.getByPlaceholder("Enter username").fill("dnyaneshwar")
       await page1.getByPlaceholder("Enter password").fill("user@12345")

       await page1.waitForTimeout(5_000)
       await page2.waitForTimeout(5_000)

    })

    test("Scenerio:4  Two different Browser Instance and two tab",async({})=>{

      const browser1= await chromium.launch({headless:false})

      const browser2=await firefox.launch({headless:false})

       const context1 :BrowserContext= await browser1.newContext();
       const context2: BrowserContext =await browser2.newContext();

       const page1 :Page= await context1.newPage();
       const page2 :Page= await context2.newPage();

       await page1.goto("https://www.saucedemo.com/")


       await page1.getByPlaceholder("Username").fill("standard_user")

       await page1.getByPlaceholder("Password").fill("secret_sauce")

       await page1.locator("#login-button").click();

      // await page1.waitForTimeout(3_000)

       await page2.goto("https://www.saucedemo.com/")

        await page2.getByPlaceholder("Username").fill("problem_user")

        await page2.getByPlaceholder("Password").fill("secret_sauce")

        await page2.locator("#login-button").click();

        await page2.reload()
        await page1.reload();

        await page2.waitForTimeout(5_000)

    })

    


})

