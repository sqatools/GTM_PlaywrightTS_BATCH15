import {expect, test} from '@playwright/test'
// Home work file: https://playwright.dev/docs/api/class-genericassertions#generic-assertions-anything
// Go through all method and practice atleast once

test.describe("Playwright Assertion and Verification", async()=> {
    test("Generic Assertion Page", async ({page}) => {
        var value = 1
        expect(value).toEqual(2)
    });

    test("Test cases potray to valid the steps", async ({page})=> {
        // Match instance of a class.
        class Example {}
        expect(new Example()).toEqual(expect.any(Example));

        // Match any number.
        expect({ prop: 1 }).toEqual({ prop: expect.any(Number) });

        // Match any string.
        expect('abc').toEqual(expect.any(String));

    });

    test("Verify locator elements and their status", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const userNameField = page.getByPlaceholder("Enter username")
        const status = await userNameField.isEnabled()
        expect(status).toBeTruthy()
        await expect(userNameField).not.toBeFocused()
        await expect(userNameField).toBeAttached()
        await userNameField.fill("user1@gmail.com")
        await expect(userNameField).toBeFocused()
        const GetFieldValue = await userNameField.inputValue()
        expect(GetFieldValue).toEqual("user1@gmail.com")

        const GenderRadio = page.locator("#male")
        await expect(GenderRadio).not.toBeChecked()
        await GenderRadio.check()
        await expect(GenderRadio).toBeChecked()

    })

    test("verify for undefined and values", ()=> {
        console.log("Hello")
    })
})