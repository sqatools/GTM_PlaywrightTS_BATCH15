import { expect, test } from '@playwright/test'

test.describe("Handle Alert", async () => {

    test("Simple Alert Accept:", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

        page.on('dialog', dilog => {

            console.log(dilog.message());
            dilog.accept();
        })
        await page.locator("#alertBtn").click();
    })

    test("Confirm  Alert Accept it :", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

        page.on('dialog', dilog => {

            console.log(dilog.message());
            dilog.accept();
        })
        await page.locator("#confirmBtn").click();

        const demotext = await page.locator("#demo").textContent()
        console.log(demotext)

        expect(demotext).toEqual("You pressed OK!")


    })

    test("Confirm  Alert Dismiss it :", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

        page.on('dialog', dilog => {

            console.log(dilog.message());
            dilog.dismiss();
        })
        await page.locator("#confirmBtn").click();

        const demotext = await page.locator("#demo").textContent()
        console.log(demotext)

        expect(demotext).toEqual("You pressed Cancel!")

    })

    test("promt Alert accept it ", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");
        const UserInput = 'john'

        page.on('dialog', dialog => {

            console.log(dialog.message())

            dialog.accept(UserInput)


        })

        await page.locator("#promptBtn").click()

        const DemoText = await page.locator("#demo").textContent()

        console.log(DemoText)

        expect(DemoText).toEqual(`Hello ${UserInput}! How are you today?`)

    })


    test("promt Alert Dismiss it ", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");
        const UserInput = 'john'

        page.on('dialog', dialog => {

            console.log(dialog.message())

            dialog.dismiss()
        })

        await page.locator("#promptBtn").click()

        const DemoText = await page.locator("#demo").textContent()
        console.log(DemoText)
        expect(DemoText).toEqual("User cancelled the prompt.")

    })
})