import { test, expect } from '@playwright/test'

test.describe("Playwright actions", () => {

    test("fill the method to enter text", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")

        const username = "dnyaneshwar121"
        const password = "dandale121"

        const usernameVal = page.getByPlaceholder("Enter username")

        await usernameVal.fill(username)

        const passwordval = page.getByPlaceholder("Enter password");
        await passwordval.fill(password)

        const enetrValue = await usernameVal.inputValue()

        console.log(enetrValue)
        expect(enetrValue).toEqual(username)
 

    })

    test("fill the date ", async ({ page }) => {
        await page.goto("https://sqatools.in/automation-practice-page/")

        await page.locator("#datePicker").fill("2026-09-07");

        // fill the time 

        await page.locator("#timePicker").fill("12:05");

        await page.locator("#dateTimePicker").fill("2026-09-09T12:09")

    })

    test("select Redio button and checkbox ", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")

        const rediobtn = page.getByRole("radio", { name: "Male", exact: true })

        expect(rediobtn).not.toBeChecked();

        await rediobtn.check();

        await expect(rediobtn).toBeChecked();

        const checkbox = page.getByRole("checkbox", { name: 'Python' })

        await expect(checkbox).not.toBeChecked();

        await checkbox.check();

        await expect(checkbox).toBeChecked();


    })

    test("Handle Droupdown value", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")

        const CountryDD = page.locator("#country");
        await CountryDD.scrollIntoViewIfNeeded();
        await CountryDD.selectOption("india");

        await page.waitForTimeout(3_000);

        await CountryDD.selectOption({ 'label': "Australia" })


        // Multi Select DD

        const skillDD = page.locator("#skills")

        await skillDD.selectOption(['Python', 'Selenium', 'API Testing'])

    })

    test("Click Actions Perform Operation", async ({ page }) => {
        await page.setViewportSize({ width: 2000, height: 1080 })

        await page.goto("https://sqatools.in/automation-practice-page/")

        const buttonElement = page.getByRole("button", { name: 'Normal Button' });

        await buttonElement.click({ 'button': 'right' })


    })

    test("Control Click ", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")

        const ClickToLink = page.getByRole("link", { name: 'Dummy Page' }).first();

        ClickToLink.click({ 'modifiers': ['Control'] })

        await page.waitForTimeout(3_000)

    })

    test("hover Operation", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")

        //await page.getByText("Tutorials").first().hover();

        await page.locator("ul#menu-menu_main li#menu-item-21479").hover();
    })

    test("Keyboard Actions", async ({ page }) => {

        await page.goto("https://sqatools.in/automation-practice-page/")

        const usernameField = page.getByPlaceholder("Enter username")
        await usernameField.fill("dnyaneshwar@gamil.com")

        await usernameField.press("Control+A")
        await usernameField.press("Control+c")

        const TextFiled = page.locator("#address")
        await TextFiled.clear();

        await TextFiled.press("Control+V")

    })

    test("Drag and Drop Operation", async({page})=> {
        await page.setViewportSize({width: 2000, height: 1080})
        await page.goto("https://sqatools.in/automation-practice-page/")
        const sourceElement = page.locator("#drag1")
        const targetElement = page.locator(".drop")
        await sourceElement.scrollIntoViewIfNeeded()
        await sourceElement.dragTo(targetElement)
        expect(targetElement).toContainText("Drag Me")
     });
    
     test("Upload File and Verify", async({page})=> {
        await page.setViewportSize({width: 2000, height: 1080})
        await page.goto("https://sqatools.in/automation-practice-page/")
        const FileUpload = page.locator("#fileUpload")
        await FileUpload.scrollIntoViewIfNeeded()
        await FileUpload.setInputFiles("C:\Test")


     })
})