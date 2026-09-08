import {expect, test} from '@playwright/test'
test("getByRole Method",async({page})=>
    {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const Prbutton=page.getByRole("button",{name:"Primary Action"})
    await expect(Prbutton).toBeVisible()
    })await page.goto('https://automationexercise.com/#google_vignette');