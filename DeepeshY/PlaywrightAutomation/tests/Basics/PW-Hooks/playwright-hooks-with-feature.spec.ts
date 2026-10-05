import {test, Page, expect} from '@playwright/test'

let page : Page

test.describe("Test cases execution", ()=> {
    test.beforeAll("Login to website", async({browser})=> {
        const context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.waitForLoadState("load")
        await page.getByPlaceholder("Username").fill("Admin")
        await page.getByPlaceholder("Password").fill("admin123")
        await page.getByRole("button", {name: "Login"}).click()
    })

    test.beforeEach("Navigate to dashboard", async()=> {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await page.waitForLoadState("load")
    })

    test.afterEach("Get current url", async()=> {
        console.log(page.url())
    })

    test.afterAll("Logout from website", async()=> {
        await page.getByAltText("profile picture").click()
        await page.getByRole("menuitem", {name: "Logout"}).click()
    });


    test("Navigate to Admin Page and verify", async()=> {
        await page.getByRole("link", {name: "Admin"}).click()
        await expect(page.getByRole("heading", {name : "User Management"})).toBeVisible()
    })

    test("Navigate to PIM Page and verify", async()=> {
        await page.getByRole("link", {name: "PIM"}).click()
        await expect(page.getByRole("heading", {name : "PIM"})).toBeVisible()
    })

    test("Navigate to Performance Page and verify", async()=> {
        await page.getByRole("link", {name: "Performance"}).click()
        await expect(page.getByRole("heading", {name : "Performance"})).toBeVisible()
    })




})