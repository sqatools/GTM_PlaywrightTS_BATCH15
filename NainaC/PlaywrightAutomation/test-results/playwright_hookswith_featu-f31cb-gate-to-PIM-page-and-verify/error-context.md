# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright_hookswith_feature.spec.ts >> Test case execution >> Nvigate to PIM page and verify
- Location: playwright_hookswith_feature.spec.ts:38:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
"afterAll" hook timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f2e4]:
  - generic [ref=f2e6]:
    - img "company-branding" [ref=f2e8]
    - generic [ref=f2e9]:
      - heading "Login" [level=5] [ref=f2e10]
      - generic [ref=f2e11]:
        - generic [ref=f2e13]:
          - paragraph [ref=f2e14]: "Username : Admin"
          - paragraph [ref=f2e15]: "Password : admin123"
        - generic [ref=f2e16]:
          - generic [ref=f2e18]:
            - generic [ref=f2e19]:
              - generic [ref=f2e20]: 
              - generic [ref=f2e21]: Username
            - textbox "Username" [active] [ref=f2e23]
          - generic [ref=f2e25]:
            - generic [ref=f2e26]:
              - generic [ref=f2e27]: 
              - generic [ref=f2e28]: Password
            - textbox "Password" [ref=f2e30]
          - button "Login" [ref=f2e32] [cursor=pointer]
          - paragraph [ref=f2e34] [cursor=pointer]: Forgot your password?
      - generic [ref=f2e35]:
        - generic [ref=f2e36]:
          - link [ref=f2e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f2e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f2e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f2e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f2e49]:
          - paragraph [ref=f2e50]: OrangeHRM OS 5.9
          - paragraph [ref=f2e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f2e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f2e54]
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
> 28 |     test.afterAll("Logout from the website", async() =>{
     |          ^ "afterAll" hook timeout of 30000ms exceeded.
  29 |        await page.getByAltText("profile picture").click()
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