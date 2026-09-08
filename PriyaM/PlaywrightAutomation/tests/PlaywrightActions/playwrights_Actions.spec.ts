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
        });
    });


    test("Select checkbox and radio buttons", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const radiobt =  page.getByRole("radio", {name: "Male", exact: true})
        await expect(radiobt).not.toBeChecked();
        await radiobt.check();
        await expect(radiobt).toBeChecked();

        const checkboxbtn = page.getByRole("checkbox", {name: 'Selenium'})
        await expect(checkboxbtn).not.toBeChecked()
        await checkboxbtn.check()
        await expect(checkboxbtn).toBeChecked()
     });

     test("Handle dropdown value", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const countryDD =  page.locator("#country")
        await countryDD.scrollIntoViewIfNeeded()
        await countryDD.selectOption("usa")

        await page.waitForTimeout(3_000)

        await countryDD.selectOption({"label": "Australia"})

        // select multipl values from drop down.
        const skilldd = page.locator("#skills")
        await skilldd.selectOption(['Python', 'Selenium', 'Playwright'])
     })

    test("Click action to perform operations", async({page})=> {
       await page.setViewportSize({width: 2000, height: 1080})
       await page.goto("https://sqatools.in/automation-practice-page/")
       const btnElement = page.getByRole("button", {name: "Normal Button"})
       await btnElement.scrollIntoViewIfNeeded()
       await test.step.skip("Right click operation", async()=> {
            await btnElement.click({'button': 'right'})
            await page.waitForTimeout(5_000)
            await page.keyboard.press("ArrowDown")
            await page.keyboard.press("ArrowDown")
            await page.keyboard.press("Enter")
       });

       await test.step("control click operation", async()=> {
            const DummyPageLink = page.getByRole("link", {name: "Dummy Page"}).first()
            await  DummyPageLink.scrollIntoViewIfNeeded()
            await DummyPageLink.click({ modifiers: ['Control'] })
            await page.waitForTimeout(5_000)
       });

       await test.step("Hover operation", async()=> {
            const TutorialLink = page.getByRole("link", {name: "Tutorials"}).first();
            await TutorialLink.hover();
       });
    });


     test("Keybord Action operations", async({page})=> {
       await page.setViewportSize({width: 2000, height: 1080})
       await page.goto("https://sqatools.in/automation-practice-page/")
       const UsernameField = await page.getByPlaceholder("Enter username")
       await UsernameField.fill("user1@gmail.com")
       await UsernameField.press("Control+A")
       await UsernameField.press("Control+C")
       const Address = page.locator("#address")
       await Address.clear()
       await Address.press("Control+V")

     });
});