import { test } from '@playwright/test'

test.describe("Alerts ", async () => {

    test("Simple alerts:accept", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

        page.on('dialog', dialog => {
            console.log(dialog.message()),
                dialog.accept()
        });
        const alert = page.getByRole('button', { name: 'Simple Alert' })
        await alert.scrollIntoViewIfNeeded()
        await alert.click()

    })
})
