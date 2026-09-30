import {test} from '@playwright/test'
import {ItemList} from './item_details.ts'

test.describe("locator chaining", ()=> {
    test("select the checkbox with locators chaining", async({page})=> {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await page.locator("table[id='cities']").locator("tr").locator("input[type=checkbox]").nth(0).check()
       
        await page.getByRole('row', { name: 'Indore 3000' }).getByRole('checkbox').check()
        // indentify the element with the help of filter
        await page.locator("tr").filter({hasText: "Hyderabad"}).getByRole('checkbox').check()

        // select the radio with the help of text filter
        await page.getByRole("listitem").filter({hasText: "Dummy return ticket – $300"}).getByRole("radio").check()
    });

    test("Select item with the help of itemName", async({page}) => {
        await page.goto("https://www.saucedemo.com/")
        await page.getByPlaceholder("Username").fill("standard_user")
        await page.getByPlaceholder("Password").fill("secret_sauce")
        await page.locator("#login-button").click()

        // const InventoryDiv = page.locator("div[class='inventory_item']").filter({hasText: "Sauce Labs Backpack"})
        // await InventoryDiv.getByRole('button', {name: "Add to cart"}).click()

        // const InventoryDiv2 = page.locator("div[class='inventory_item']").filter({hasText: "Sauce Labs Bolt T-Shirt"})
        // await InventoryDiv2.getByRole('button', {name: "Add to cart"}).click()

        for (var item of ItemList) {
            const InDiv = page.locator("div[class='inventory_item']").filter({hasText: `${item}`})
            await InDiv.getByRole('button', {name: "Add to cart"}).click()
        }

        // remove item using element as filter
        const RemoveItemDiv = page.locator("div[class='inventory_item']").filter({has: page.locator("//div[text()='Sauce Labs Bolt T-Shirt']")})
        await RemoveItemDiv.getByRole('button', {name: "Remove"}).click()

    })
});