import { test, expect } from '@playwright/test'

test.describe("Alerts ", async () => {

    test("Simple alerts:accept it", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

        page.on('dialog', dialog => {
            console.log(dialog.message()),
                dialog.accept()
        });
        const Simplealert = page.getByRole('button', { name: 'Simple Alert' })
        await Simplealert.scrollIntoViewIfNeeded()
        await Simplealert.click()
    })

    test("Confirm alerts: accept it", async ({ page }) => {

        await page.goto(
            "https://testautomationpractice.blogspot.com/p/playwrightpractice.html"
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


    test("Prompt alerts:accept it", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const UserInput= "Hari"
        page.on('dialog', dialog => {
            console.log(dialog.message()),
                dialog.accept(UserInput)
        });
        const PromptAlert = page.getByRole('button', { name: 'Prompt Alert' })
        await PromptAlert.click()
        const text = await page.locator('#demo').textContent()
         expect(text).toEqual(`Hello ${UserInput}! How are you today?`)
    })

     test("Prompt alerts:dismiss it", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', dialog => {
            console.log(dialog.message()),
                dialog.dismiss()
        });
        const PromptAlert = page.getByRole('button', { name: 'Prompt Alert' })
        await PromptAlert.click()
        const text = await page.locator('#demo').textContent()
         expect(text).toEqual("User cancelled the prompt.")
    })
})
