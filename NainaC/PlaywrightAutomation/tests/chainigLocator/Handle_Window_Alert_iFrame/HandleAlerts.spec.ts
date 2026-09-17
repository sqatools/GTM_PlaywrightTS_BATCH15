
import {test, expect} from '@playwright/test'

test.describe("Handle Alerts",async() =>  {


    test("Simple Alerts : Accept", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
page.on('dialog', async dialog =>{
     console.log(dialog.message()),
    await dialog.accept()
});
await page.locator('#alertBtn').click();
    });



test("Confirm Alert : Accept", async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")
 page.on('dialog', async dialog=>{
console.log(dialog.message())
await dialog.accept()
 });
 await page.locator('#confirmBtn').click()
})

test("Confirm Alerts : Dismiss It", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
page.on('dialog', async dialog =>{
console.log(dialog.message())
await dialog.dismiss()
})
await page.locator('#confirmBtn').click()
const DemoText = await page.locator('#demo').textContent()
console.log(DemoText)
expect(DemoText).toEqual("You pressed Cancel!")
})


test("Prompt Alert : Accept", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const UserInput="John"
    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.accept(UserInput)
    })
    await page.locator("#promptBtn").click()
    const DemoText = await page.locator('#demo').textContent()
    console.log(DemoText)
    expect(DemoText).toEqual(`Hello ${UserInput}! How are you today?`)
})

test("Prompt Alert: Dissmiss It", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const UserInput = "john"
    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.dismiss()
    })
    await page.locator('#promptBtn').click()
    const DemoText = await page.locator('#demo').textContent()
    console.log(DemoText)
    expect(DemoText).toEqual('User cancelled the prompt.')
})
})
