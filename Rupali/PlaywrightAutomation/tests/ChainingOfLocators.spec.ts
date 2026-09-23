import {test} from '@playwright/test'
test.describe("locators chaining",()=>{

    test("select checkbox with chaining of locators", async({page})=>{

    await page.goto("https://sqatools.in/dummy-booking-website")
    await page.locator("table[id='cities']").locator("tr").locator("input[type='checkbox']").nth(0).check()

    await page.locator("tr").filter({hasText:"Hyderabad"}).getByRole('checkbox').check()
    await page.getByRole('listitem').filter({hasText:"Dummy hotel booking ticket – $400 "}).locator("input[type='radio']").check()
    })

    test("select item with itemname", async({page})=>{
        await page.goto("https://www.saucedemo.com/")
        await page.getByPlaceholder('Username').fill("standard_user");
        await page.getByPlaceholder('Password').fill("secret_sauce");
        await page.locator('#login-button').click()

        const InventoryItem = page.locator("div[class='inventory_item']").filter({hasText: 'Sauce Labs Backpack'})
        await InventoryItem.getByRole('button',{name:"Add to cart"}).click()
   
    })


})