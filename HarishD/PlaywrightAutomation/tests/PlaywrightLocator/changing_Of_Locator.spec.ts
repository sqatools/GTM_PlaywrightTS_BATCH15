import { test } from '@playwright/test';

import { ItemList } from './Item_Details.ts';

test.describe("locators to identify", () => {
    test("select the checkbox with locators chaining", async ({ page }) => {
        await page.goto("https://sqatools.in/dummy-booking-website/");

        await page.locator("table[id='cities']").locator('tr').locator("input[type='checkbox']").nth(0).check()
        await page.getByRole('row', { name: 'Pune 2002' }).getByRole('checkbox').check()
        // row is is apre defined 

        // 2) <input type="checkbox" value="checkbox"/> aka getByRole('row', { name: 'Pune 2002' }).getByRole('checkbox')
        // 3) <input type="checkbox" value="checkbox"/> aka getByRole('row', { name: 'Indore 3000' }).getByRole('checkbox')
        // 4) <input type="checkbox" value="checkbox"/> aka getByRole('row', { name: 'Kolkata 5000' }).getByRole('checkbox')
        // 5) <input type="checkbox" value="checkbox"/> aka getByRole('row', { name: 'Hyderabad 6000' }).getByRole('checkbox')
        // 6) <input type="checkbox" value="checkbox"/> aka getByRole('row', { name: 'Orangabad 3456' }).getByRole('checkbox')
        // 7) <input type="checkbox" value="checkbox"/> aka locator('tr:nth-child(8) > td > input')
        await page.locator('tr').locator("input[type='checkbox']").nth(2).check()

        // indentify the element with the help of filter
        await page.locator('tr').filter({ hasText: 'Hyderabad' }).getByRole('checkbox').check()
        // hasText is used to locate an element that contains the specified text.

        // select the radio with the help of text filter
        await page.getByRole('listitem').filter({ hasText: "Dummy hotel booking ticket – $400" }).getByRole('radio').check()

    });

    test("Select item with the help of itemName", async ({ page }) => {

        await page.goto("https://www.saucedemo.com/")
        await page.getByPlaceholder("Username").fill('standard_user')
        await page.getByPlaceholder("Password").fill('secret_sauce')
        await page.locator('#login-button').click()


        // const Inventorydiv = page.locator("div[class='inventory_item']").filter({ hasText: "Sauce Labs Backpack" })
        // await Inventorydiv.getByRole("button", { name: 'Add to cart' }).click()

        // const Inventorydiv1 = page.locator("div[class='inventory_item']").filter({ hasText: "Test.allTheThings() T-Shirt (Red)" })
        // await Inventorydiv1.getByRole("button", { name: 'Add to cart' }).click()

        // const RemoveItem = page.locator("div[class='inventory_item']").filter({ hasText: "Sauce Labs Backpack" })
        // await RemoveItem.getByRole("button", { name: 'Remove' }).click()

        for (var item of ItemList) {
                    const InDiv = page.locator("div[class='inventory_item']").filter({hasText: `${item}`})
                    await InDiv.getByRole('button', {name: "Add to cart"}).click()
                }
        // remove items using element as filter
        // has is used to locate an element

       const RemoveitemDIV=page.locator("div[class='inventory_item']").filter({has: page.locator("div[class='inventory_item']") })
        await RemoveitemDIV.getByRole("button", { name: 'Remove' }).click()
    })




});