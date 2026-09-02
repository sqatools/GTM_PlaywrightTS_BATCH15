import {test, expect} from '@playwright/test'

test.describe("Playwright Actions", async()=> {
    test("Fill method to enter text", async( {page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const usernameVal = "user1@gmail.com"
        const PasswordVal = "P@ssw0rd"
        await test.step.skip("Enter Username value and verify", async()=> {
            const UsernameField = page.getByPlaceholder("Enter username")
            await UsernameField.fill(usernameVal)
            const EnteredVal = await UsernameField.inputValue()
            console.log(EnteredVal)
            expect(usernameVal).toEqual(EnteredVal)
        });

        await test.step.skip("Enter password value and verify", async()=> {
            const PasswordField = page.getByPlaceholder("Enter password")
            await PasswordField.fill(PasswordVal)
            const EnteredPass = await PasswordField.inputValue()
            console.log(EnteredPass)
            expect(EnteredPass).toEqual(PasswordVal)
        });

        await test.step("Enter date and time", async()=> {
            // date formate should be YYYY-MM-DD
            await page.locator("#datePicker").fill("2026-04-30")
            // time should be in 24 hr clock
            await page.locator("#timePicker").fill("18:15")
            // dateTimePicker
            await page.locator("#dateTimePicker").fill("2026-03-02T18:15")


        })
    })
})