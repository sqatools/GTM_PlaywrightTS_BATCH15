# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright_hookswith_feature.spec.ts >> Test case execution >> Nvigate to Performance page
- Location: playwright_hookswith_feature.spec.ts:43:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test,Page,expect} from '@playwright/test'
  2  | 
  3  | 
  4  | let page : Page
  5  | test.describe("Test case execution", ()=>{
  6  |     test.beforeAll("Login to website", async ({browser}) =>{
  7  |         const context = await browser.newContext()
  8  | page = await context.newPage()
  9  | await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  10 | await page.getByPlaceholder("Username").fill(" Admin")
  11 | await page.getByPlaceholder("Password").fill("admin123")
  12 | await page.getByRole("button", {name : "Login"}).click()
  13 | 
  14 |     })
  15 | 
  16 |     test.beforeEach("Navigate to dashboard", async() =>{
  17 |         page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  18 |         await page.waitForLoadState("load")
  19 | 
  20 |     })
  21 | 
  22 | 
  23 |       test.afterEach("Get current url", async ()=>{
  24 |         console.log(page.url())
  25 |     }) 
  26 | 
  27 | 
  28 |     test.afterAll("Logout from the website", async() =>{
> 29 |        await page.getByAltText("profile picture").click()
     |                                                   ^ Error: locator.click: Target page, context or browser has been closed
  30 |       await  page.getByRole("menuitem", {name : "Logout"}).click()
  31 |     }) 
  32 | 
  33 |   test("Nvigate to admin page", async()=>{
  34 |     await page.getByRole("link", {name : "Admin"}).click()
  35 |    await expect(page.getByRole("heading", {name: "User Management"})).toBeVisible()
  36 |   })
  37 | 
  38 |   test("Nvigate to PIM page and verify", async()=>{
  39 |     await page.getByRole("link", {name : "PIM"}).click()
  40 |    await expect(page.getByRole("heading", {name: "PIM"})).toBeVisible()
  41 |   })
  42 | 
  43 |   test("Nvigate to Performance page", async()=>{
  44 |     await page.getByRole("link", {name : "Performace"}).click()
  45 |    await expect(page.getByRole("heading", {name: "Performance"})).toBeVisible()
  46 |   })
  47 | }) 
```