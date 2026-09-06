import { expect, test } from '@playwright/test'

test.describe("playwright action", async () => {

    test("Fill the text box and click on button", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")
        const UserNameVal = "Harish"
        const PasswordVal = "User123"
        await test.step("Enter the username and password", async () => {
            const UsernameField = page.getByPlaceholder("Enter username")
            await UsernameField.fill(UserNameVal)
            const EnterValue = await UsernameField.inputValue()
            console.log("Entered value in username field is : " + EnterValue)
            expect(EnterValue).toEqual(UserNameVal)
        })
        await test.step("Enter the password and verify", async () => {
            const PasswordField = page.getByPlaceholder("Enter password")
            await PasswordField.fill(PasswordVal)
            const EnterPassword = await PasswordField.inputValue()
            console.log("Entered value in password field is : " + EnterPassword)
            expect(EnterPassword).toEqual(PasswordVal)
        })

        await test.step("select the date from date picker", async () => {
            await page.locator("#datePicker").fill("2024-06-20")
            await page.locator("#timePicker").fill("10:30")
            await page.locator("#dateTimePicker").fill("2026-03-02T18:15")

        })
    })

    test("Select checkbox and radiobutton", async ({ page }) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        await test.step("Click on the radio button and verify the text", async () => {
            const radiobutton = page.getByRole("radio", { name: "Male", exact: true })
            await expect(radiobutton).not.toBeChecked()
            await radiobutton.check()
            await expect(radiobutton).toBeChecked()
        })
        await test.step("Click on the checkbox button and verify the text", async () => {
            const checkbox = page.getByRole("checkbox", { name: "Python", exact: true })
            await expect(checkbox).not.toBeChecked()
            await checkbox.check()
            await expect(checkbox).toBeChecked()
        })

    })

    test("select the dropdown", async ({ page }) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const dropdownselect = page.locator("#country")
        await dropdownselect.scrollIntoViewIfNeeded()
        dropdownselect.selectOption("uk")
        await page.waitForTimeout(3_000)
        // Single selection matching the label
        await page.locator("#country").selectOption({ label: "Australia" });

        //Multiple selected items
        const Skills = page.locator('#skills')
        await Skills.selectOption(['Python', 'Selenium', 'Playwright'])

    })

    test("Mouse over action", async ({ page }) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        await test.step.skip("Right click", async () => {
            // const rightclick =page.getByRole("button",{name :"Normal Button"})
            //  await rightclick.click({ button: 'right' })
            await page.getByText('Submit').click({ button: 'right' });
        })

        await test.step.skip("Control click operation", async () => {
            // const controlclick =page.getByRole("link",{name :"Dummy Page"})
            //  await controlclick.click({ modifiers: ['Control'] })
            await page.getByText('Dummy Page').scrollIntoViewIfNeeded();
            await page.getByText('Dummy Page').click({ modifiers: ['ControlOrMeta'] });
        })

        await test.step("Hover over element", async () => {
            await page.getByText('Tutorials').first().hover();
            await page.waitForTimeout(3_000)
            await page.getByText("SQL Tutorial").click()

        })
    })

    test("Keyboard action", async ({ page }) => {
    await page.goto("https://sqatools.in/automation-practice-page/")

    await test.step("Copy and paste using keyboard action", async () => {
        const Username = page.getByPlaceholder("Enter username")

        await Username.fill("User@123gmail.com")
        await Username.press("Control+A")
        await Username.press("Control+C")

        const Address = page.locator("#address")

        await Address.clear()
        await Address.press("Control+V")
    })
})


})  