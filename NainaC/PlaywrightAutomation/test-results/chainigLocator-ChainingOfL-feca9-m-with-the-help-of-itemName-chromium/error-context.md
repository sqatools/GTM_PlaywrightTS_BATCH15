# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chainigLocator\ChainingOfLocator.spec.ts >> locator chaining >> select item with the help of itemName
- Location: NainaC\PlaywrightAutomation\tests\chainigLocator\ChainingOfLocator.spec.ts:23:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('div[class=\'inventory_item\']').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' })

```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test.describe("locator chaining",()=>{
  4  | 
  5  |     test("select the check box with locator chaining",async  ({page})=>{
  6  | 
  7  | await page.goto("https://sqatools.in/dummy-booking-website/")
  8  | 
  9  | await page.locator("table[id='cities']").locator("tr").locator("input[type=checkbox]").nth(0).check();
  10 | 
  11 | 
  12 | await page.getByRole('row',{name : 'Kolkata'}).getByRole('checkbox').check();
  13 | 
  14 | // identify element with the help of Filter
  15 | 
  16 | await page.locator("tr").filter({hasText :'Orangabad'}).getByRole("checkbox").check();
  17 | 
  18 | // select the redio with the help of text filter
  19 | 
  20 | await page.getByRole("listitem").filter({hasText: 'Dummy return ticket – $300 '}).getByRole("radio").check();
  21 |    
  22 | })
  23 | test("select item with the help of itemName",async ({page})=>{
  24 | 
  25 |  await page.goto("https://www.saucedemo.com/");
  26 | 
  27 |  await page.getByPlaceholder("Username").fill("standard_user")
  28 |  await page.getByPlaceholder("Password").fill("secret_sauce");
  29 | 
  30 |  await page.locator("#login-button").click();
  31 | 
  32 |  const inventory=page.locator(("div[class='inventory_item']")).filter({hasText:"Sauce Labs Backpack"})
  33 | 
> 34 |  await inventory.getByRole('button', {name: "Add to cart"}).click()
     |                                                             ^ Error: locator.click: Target page, context or browser has been closed
  35 |             
  36 | })
  37 | 
  38 | 
  39 | })
```