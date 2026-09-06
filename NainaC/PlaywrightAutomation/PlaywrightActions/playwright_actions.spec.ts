import {test, expect} from '@playwright/test'

test.describe("Playwright actions", () =>{
    test("fill methods to enter text", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const usernamevalue = "user1@gmail.com"
        const Passwordvalue = "p@ssw0rd"
        await test.step("Enter username value and verify ", async()=>{
        const UsernameField =page.getByPlaceholder("Enter username")
        await UsernameField.fill(usernamevalue)
        const entervalue = await UsernameField.inputValue()
        console.log(entervalue)
        await expect(entervalue).toEqual(usernamevalue)
        });
        await test.step("Enter Passwordvalue value and verify ", async()=>{
        const PasswordField =page.getByPlaceholder("Enter password")
        await PasswordField.fill(Passwordvalue)
        const enterpass = await PasswordField.inputValue()
        console.log(Passwordvalue)
        await expect(enterpass).toEqual(Passwordvalue)
        });
})
    })