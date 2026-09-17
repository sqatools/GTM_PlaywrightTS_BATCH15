import {test,BrowserContext,Page} from '@playwright/test'

test.describe("window hanbling",async()=>{
 
      test("one browser two tabs",async({browser})=>{
        
      const context:BrowserContext = await browser.newContext();

      const page1:Page=await context.newPage();
      const page2:Page=await context.newPage();
     
      await page1.goto("https://sqatools.in/dummy-booking-website/") 
      await page2.goto("https://sqatools.in/automation-practice-page/")

     })

  test("2 browser isntances and 2 tabs",async({browser})=>{

     const context1:BrowserContext=await browser.newContext();
     const context2:BrowserContext=await browser.newContext();

    const page1:Page=await context1.newPage();
    const page2:Page=await context2.newPage();

    await page1.goto("https://sqatools.in/dummy-booking-website/") 
    await page2.goto("https://sqatools.in/automation-practice-page/")

  })
  test("Scenario 3: One browser and tabs with click event", async({browser}) => {
   const context:BrowserContext=await browser.newContext();

    const page1:Page=await context.newPage();
    await page1.goto("https://sqatools.in/automation-practice-page/")

    const [newPage] = await Promise.all([page1.waitForEvent("popup"), 
        page1.getByRole("link", {name: "Login Page"}).first().click()
        ])
   const page2 = newPage
   await page2.getByPlaceholder("Email address or phone number").fill("faceuser2@gmail.com")
   await page2.getByPlaceholder("Password").fill("user@12345")
   await page2.getByRole("button", {name: "Log in"}).click()



  })
})
