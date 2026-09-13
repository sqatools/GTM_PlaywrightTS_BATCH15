import { test, expect } from '@playwright/test'

test.describe("Alerts ",   async() => {

     test.setTimeout(50_000)   // this timeout for completed test suite
    test("Simple alerts:accept it", async ({ page }) => {

        test.setTimeout(40_000)  // this is for specific timeout for only this test case
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', dialog => {
            console.log(dialog.message()),
                dialog.accept()
        });
        //Static Timeout
         await page.waitForTimeout(25_000) //Pause the test for 25,000 milliseconds = 25 seconds.
        const Simplealert = page.getByRole('button', { name: 'Simple Alert' })
        //locator Time Out
        await Simplealert.waitFor({state :'visible',timeout :10_000})
        //expect Timeout
        expect(Simplealert).toBeEnabled({timeout:10_000})
        await Simplealert.scrollIntoViewIfNeeded()
        //action Timeout
        await Simplealert.click({timeout:10_000})
    })

    test("Navigation Timeout", async ({ page }) => {

        await page.goto(
            "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",{timeout :20_000}
        )
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.accept()   // if we want o accept  .accept()
        })
        const confirmAlert = page.getByRole('button', { name: 'Confirmation Alert' })
        await confirmAlert.click()
        const text = await page.locator('#demo').textContent()
         expect(text).toEqual('You pressed OK!')
    })

     test("Confirm alerts: dismiss", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()   //if we need to cancel .dismiss(0)
        })
        const confirmAlert = page.getByRole('button', { name: 'Confirmation Alert' })
        await confirmAlert.click()
        const text = await page.locator('#demo').textContent()
         expect(text).toEqual('You pressed Cancel!')
    })


})
