import {test} from '@playwright/test'

test.describe("locator chaining",()=>{

    test("select the check box with locator chaining",async  ({page})=>{

await page.goto("https://sqatools.in/dummy-booking-website/")

await page.locator("table[id='cities']").locator("tr").locator("input[type=checkbox]").nth(0).check();


await page.getByRole('row',{name : 'Kolkata'}).getByRole('checkbox').check();

// identify element with the help of Filter

await page.locator("tr").filter({hasText :'Orangabad'}).getByRole("checkbox").check();

// select the redio with the help of text filter

await page.getByRole("listitem").filter({hasText: 'Dummy return ticket – $300 '}).getByRole("radio").check();
   
})
test("select item with the help of itemName",async ({page})=>{

 await page.goto("https://www.saucedemo.com/");

 await page.getByPlaceholder("Username").fill("standard_user")
 await page.getByPlaceholder("Password").fill("secret_sauce");

 await page.locator("#login-button").click();

 const inventory=page.locator(("div[class='inventory_item']")).filter({hasText:"Sauce Labs Backpack"})

 await inventory.getByRole('button', {name: "Add to cart"}).click()
            
})


})