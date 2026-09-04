import { test, expect } from '@playwright/test'

test.describe("Playwright actions", () => {

    test("fill the method to enter text", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")

        const username="dnyaneshwar121"
        const password="dandale121"

        const usernameVal= page.getByPlaceholder("Enter username")

        await usernameVal.fill(username)

        const passwordval=page.getByPlaceholder("Enter password");
        await passwordval.fill(password)

        const enetrValue=await usernameVal.inputValue()

        console.log(enetrValue)
        expect(enetrValue).toEqual(username)    

    })

})