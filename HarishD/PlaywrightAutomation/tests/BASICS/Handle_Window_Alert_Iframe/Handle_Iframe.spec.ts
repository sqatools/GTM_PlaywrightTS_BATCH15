import { test, expect } from '@playwright/test'

test.describe("Handle iframes", async () => {

    test("Test to handle iframes", async ({ page }) => {
        await page.goto('https://sqatools.in/automation-practice-page/')

        const iframeelememt = page.locator('#sampleIframe')
        const heading = iframeelememt.getByRole('heading').textContent()
        console.log(heading)
        //  const heading= iframeelememt.getByRole('heading',{name:'Example Domain'})
        //  await expect(heading).toBeVisible()
        const para = await iframeelememt.locator('p').first().textContent()
        console.log(para)

    })

})