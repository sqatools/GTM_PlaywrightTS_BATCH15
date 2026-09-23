import {expect,test} from '@playwright/test'
test.describe("Handle Alerts",async()=>
{
    test("Sample Alerts:Accept",async({page})=>
    {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',dialog=>
    {
        console.log(dialog.message())
        dialog.accept()
    })
    await page.locator('#alertBtn').click()
    
})


    test("Confirm Alerts:Accept it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")
        page.on('dialog',dialog=>

        {
            console.log(dialog.message()),
            dialog.accept()
        })
        await page.locator('#confirmBtn').click()
        const DemoText=await page.locator('#demo').textContent()
        console.log(DemoText)
        expect(DemoText).toEqual("You pressed OK!")
    })


    test("Confirm Alerts:Dismiss it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")
        page.on('dialog',dialog=>
        {
           console.log(dialog,message()),
           dialog.dismiss()
        })
        await page.locator('#confirmBtn').click()
        const Demotext=page.locator("#demo").textContent()
        console.log(Demotext)
        expect(Demotext).toEqual("You pressed Cancel!")
        
    })

    
test("Prompt Alerts:Accept it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")
        const UserInput="John"
        page.on('dialog',dialog=>

        {
            console.log(dialog.message()),
            dialog.accept()
        })
        await page.locator('#promptBtn').click()
        const DemoText=await page.locator('#demo').textContent()
        console.log(DemoText)
        expect(DemoText).toEqual("Hello ${UserInput}! How are you today?")
    })


    test("Prompt Alerts:Dismiss it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")
        page.on('dialog',dialog=>
        {
           console.log(dialog,message()),
           dialog.dismiss()
        })
        await page.locator('#promptBtn').click()
        const Demotext=page.locator("#demo").textContent()
        console.log(Demotext)
        expect(Demotext).toEqual("User cancelled the prompt")
        
    })


})
