import {test} from '@playwright/test'
import { ItemList} from './item_details.ts' 

test.describe("Locator Chaining", ()=>{
test("Select the checkboxes using locator chaining",async({page})=>{
await page.goto("https://sqatools.in/dummy-booking-website/")
await page.locator("table[id='cities']").locator("tr").locator("input[type='checkbox']").nth(0).check()
await page.getByRole('row', {name: 'Indore'}).getByRole('checkbox').check()
//Identify the element with the help of filter
await page.locator("tr").filter({hasText: 'Hyderabad'}).getByRole('checkbox').check()
//select radio with the help of filter
await page.getByRole("listitem").filter({hasText: "Dummy return ticket – $300"}).getByRole("radio").click()
})    


//select item with item name

test("Select Item with Itemlist", async({page})=>{
 await page.goto("https://www.saucedemo.com/") 
 await page.getByPlaceholder("Username").fill("standard_user")  
 await page.getByPlaceholder("Password").fill("secret_sauce")
 await page.locator("#login-button").click()
//  const InventoryDiv1= page.locator("div[class='inventory_item']").filter({hasText: 'Sauce Labs Backpack'})
//  await InventoryDiv1.getByRole('button', {name: 'Add to cart'}).click()

//  const InventoryDiv2= page.locator("div[class='inventory_item']").filter({hasText: 'Sauce Labs Bike Light'})
//  await InventoryDiv2.getByRole('button', {name: 'Add to cart'}).click()
 
for(var Item of ItemList){
    const InvDiv= page.locator("div[class='inventory_item']").filter({hasText: `${Item}`})
await InvDiv.getByRole('button', {name: 'Add to cart'}).click()
}


//remove item using filter
const removeItemDiv = page.locator("div[class='inventory_item']").filter({has: page.locator("//div[text()='Sauce Labs Bolt T-Shirt']")})
await removeItemDiv.getByRole('button', {name: 'Remove'}).click()

})
});
