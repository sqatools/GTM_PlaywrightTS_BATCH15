import {expect, test} from '@playwright/test'

test.describe("Handle IFrame", async()=> {
    test("Test to handle iframe element", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const IFrameElement = page.locator("#sampleIframe")
        const heading = IFrameElement.getByRole("heading", {name: "Example Domain"})
        await expect(heading).toBeVisible()
        const para = IFrameElement.locator("p").first().textContent()
        console.log(para)
    })
})