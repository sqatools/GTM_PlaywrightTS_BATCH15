# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chainigLocator\PlaywrightAssertion\playwright_assertion.spec.ts >> Playwight Assertion and verification >> Generic assertion Page
- Location: NainaC\PlaywrightAutomation\tests\chainigLocator\PlaywrightAssertion\playwright_assertion.spec.ts:5:9

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: 2
Received: 1
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | 
  3  | test.describe("Playwight Assertion and verification", async()=>{
  4  | 
  5  |     test("Generic assertion Page", async({page}) =>{
  6  |         var value =1
> 7  |     expect(value).toEqual(2)
     |                   ^ Error: expect(received).toEqual(expected) // deep equality
  8  |     })
  9  | 
  10 |     test("Test Cases potray to valid the steps", async({page})=>{
  11 |         // Match instance of a class.
  12 |                 class Example {}
  13 |                 expect(new Example()).toEqual(expect.any(Example));
  14 |         
  15 |                 // Match any number.
  16 |                 expect({ prop: 1 }).toEqual({ prop: expect.any(Number) });
  17 |         
  18 |                 // Match any string.
  19 |                 expect('abc').toEqual(expect.any(String));
  20 |         
  21 |             });
  22 | 
  23 | 
  24 |             test("Verify the locators elements and their status", async({page})=>{
  25 |                 await page.goto("https://sqatools.in/automation-practice-page/")
  26 | const Usernamefield = await page.getByPlaceholder("Enter username")
  27 | const status = await Usernamefield.isEnabled()
  28 | await expect(status).toBeTruthy()
  29 | await expect(Usernamefield).toBeFocused()
  30 | await expect(Usernamefield).toBeAttached()
  31 | await Usernamefield.fill("user1@gmail.com")
  32 | const GetFieldValue = await Usernamefield.inputValue()
  33 | expect(GetFieldValue).toEqual("user1@gmail.com")
  34 | 
  35 | 
  36 | const GenderBox = await page.locator('#male')
  37 | expect(GenderBox).not.toBeChecked()
  38 | GenderBox.check()
  39 | expect(GenderBox).toBeChecked()
  40 | 
  41 |             });
  42 | 
  43 |              test("verify for undefined and values", ()=> {
  44 |                     console.log("Hello")
  45 |     })
  46 | })
  47 | 
```