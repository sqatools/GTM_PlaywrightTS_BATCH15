import {expect, test} from '@playwright/test'

test.describe("Playwright Actions", async()=>{

    test("Fill method to enter text", async({page})=>{

        await page.goto("https://sqatools.in/automation-practice-page/");
        const userNameVal="user1@gmail.com"
        const passwordVal="P@ssw0rd"
        await test.step.skip("Enter username and verify",async()=>{
        const userNameField = page.getByPlaceholder("Enter username")
        await userNameField.fill(userNameVal)
        const enteredVal = await userNameField.inputValue();
        console.log(enteredVal)
        expect(enteredVal).toEqual(userNameVal)
        })

        await test.step.skip("Enter password and verify",async()=>{
        const passwordField = page.getByPlaceholder("Enter password")
        await passwordField.fill(passwordVal)
        const enteredPassword = await passwordField.inputValue();
        console.log(enteredPassword)
        expect(enteredPassword).toEqual(passwordVal)
        })

        await test.step("Enter date and time", async()=>{
            //date format YYYY-MM-DD
            await page.locator("#datePicker").fill('2026-09-03')
            //time pickry 24hr format
            await page.locator("#timePicker").fill("18:15")
            //date time picker YYYY-MM-DDT24hr format
            await page.locator("#dateTimePicker").fill("2026-09-03T18:15")
        })
    })


})