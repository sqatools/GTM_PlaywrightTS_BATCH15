import test, { expect } from "@playwright/test";    
test.describe("playwright methods practice", ()=> {
    test("getByRole method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const button = page.getByRole("button", {name: "Primary Action"} )
        await expect(button).toBeVisible()
    })
    test("getByText method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const button = page.getByText("Submit Form")
        await expect(button).toBeEnabled()
    })
    test("getByLabel method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByLabel("Email Address:").fill("vishwaa@gmail.com")
    })
    test("getByPlaceholder method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByPlaceholder("Enter your full name").fill("Vishwashetty")
    })
    test("getByTestId method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const button = page.getByTestId("testid1")
        await expect(button).toBeVisible()
    })
    test("getByAltText method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const image = page.getByAltText("logo image")
        await expect(image).toBeVisible()
    })
    test("getByTitle method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const link = page.getByTitle("Home page link")
        await expect(link).toBeVisible()
    })
})