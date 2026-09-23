import {test,expect} from '@playwright/test'

    test("Fill method to enter text",async({page})=>

 {
     await page.goto("https://sqatools.in/automation-practice-page/")
     const Ufield=await page.getByPlaceholder("Enter username").fill("user1@gmail.com")
    //const Enterval=await Ufield.inputValue()
    // console.log(Enterval)
    // expect()
 

 test("Enter date and time",async()=>
{
    await page.locator("#datePicker").fill("2026-09-11")
    await page.locator("#timePicker").fill("19:53")
    await page.locator("#dateTimePicker").fill("2026-09-11T19:53")

})
test("Select checkbox and radio buttons",async({page})
{
    await page.goto("https://sqatools.in/automation-practice-page/")
    const radiobt=page.getByRole("radio",{name:"male",exact:true})
    await expect(radiobt).not.toBeChecked()
    await radiobt.check()
    await expect(radiobt).toBeChecked()
    const checkboxbt=page.getByRole("checkbox",{name:"selenium",exact:true})
    await expect(checkboxbt).not.toBeChecked()
    await checkboxbt.check()
    await expect(checkboxbt).toBeChecked()
})

test("handle drop down",asyns({page}))=>
{
    await page.goto("https://sqatools.in/automation-practice-page/")
    const countryDD=page.locator("#country")
    await countryDD.scrollIntoViewIfNeeded()
    await countryDD.selectOption("usa")
    await countryDD.selectOption({"label":"Australia"})
    const skilldd=page.locator("#skills")
    await skilldd.selectOption(['Python','Selenium'])
}
test("Click action to perform",async({page})=>
{
    await page.setViewportSize({width:2000,height:1080})
    await page.goto("https://sqatools.in/automation-practice-page/")
    const button=page.getByRole("button",{name:"normalButton"
        await button.scrollIntoViewIfNeeded()
        await test.step("Right click operation",async({page})=>
        {
            await button.click({"button":"right"})
            await page.waitForTimeout(5_000)
            await page.Keyboard.press("ArrowDowwn")
            await page.Keyboard.press("Enter")
        })
    })
})

 })
