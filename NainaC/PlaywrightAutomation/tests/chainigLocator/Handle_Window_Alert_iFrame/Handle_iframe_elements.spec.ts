import {test, expect} from '@playwright/test'

test.describe("Handle Iframe ",async()=>{
    test("Test case to handle iframe element", async({page})=>{
        await page.goto("https://sqatools.in/automation-practice-page/")

        const IFrameelement = page.frameLocator("#sampleIframe")
       // const heading = await IFrameelement.getByRole("heading").textContent()
        const heading = IFrameelement.getByRole("heading", {name : 'Example Domain'})
         await expect(heading).toBeVisible()
        console.log(heading)
        const para = await IFrameelement.locator("p").first().textContent()
        console.log(para)
    })
}) 