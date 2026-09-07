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

    test("Select radio and checkbox types", async({page})=>{
    await page.goto("https://sqatools.in/automation-practice-page/")
    const radiobtn= await page.getByRole("radio",{name: "Male", exact: true})
    await expect(radiobtn).not.toBeChecked();
    await radiobtn.check()
    await expect(radiobtn).toBeChecked();
    
    const checkboxbtn = await page.getByRole("checkbox",{name: "Java"})
    await expect(checkboxbtn).not.toBeChecked();
    await checkboxbtn.check();
    await expect(checkboxbtn).toBeChecked();
    })

    test("Handling dropdown", async({page})=>{
    await page.goto("https://sqatools.in/automation-practice-page/")
    const countryDD= page.locator("#country")
    await countryDD.scrollIntoViewIfNeeded();
    await countryDD.selectOption("usa");
    await page.waitForTimeout(3_000);
    await countryDD.selectOption({label:"India"});
//select multiple dropdown
   const skillsdd = page.locator("#skills")
   await skillsdd.selectOption(['Python','Selenium','Playwright']);
})

    test("Perform click options", async({page})=>{
        await page.setViewportSize({width:2000,height:1080})
        await page.goto("https://sqatools.in/automation-practice-page/");
        const rightClickBtn = page.getByRole("button", {name: 'Normal Button'})
        await rightClickBtn.click({'button':'right'})

        await test.step("Control operations", async()=>{
         const dummyPagectrl = page.getByRole("link",{name:'Dummy Page'}).first();
         await dummyPagectrl.click({modifiers:['Control']})
         await page.waitForTimeout(3_000)   
        
         await test.step("hover checking", async()=>{
           const tutorialHover= page.getByRole("link",{name:"Tutorials"}).first();
           await tutorialHover.hover();
           await page.waitForTimeout(1_000) 
        })
        
        })
    })

    test("Keyboard operations", async({page})=>{
        await page.setViewportSize({width:2000,height:1080})
        await page.goto("https://sqatools.in/automation-practice-page/");
        const userNameField = page.getByPlaceholder("Enter username");
        await userNameField.fill("user1@gmail.com")
        await userNameField.press("Control+A");
        await userNameField.press("Control+C")
        const addressField = page.locator("#address")
        await addressField.clear();
        await addressField.press("Control+V");
    });

})