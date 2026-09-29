import {expect, test} from '@playwright/test'

test.describe("Playwight Assertion and verification", async()=>{

    test("Generic assertion Page", async({page}) =>{
        var value =1
    expect(value).toEqual(2)
    })

    test("Test Cases potray to valid the steps", async({page})=>{
        // Match instance of a class.
                class Example {}
                expect(new Example()).toEqual(expect.any(Example));
        
                // Match any number.
                expect({ prop: 1 }).toEqual({ prop: expect.any(Number) });
        
                // Match any string.
                expect('abc').toEqual(expect.any(String));
        
            });


            test("Verify the locators elements and their status", async({page})=>{
                await page.goto("https://sqatools.in/automation-practice-page/")
const Usernamefield = await page.getByPlaceholder("Enter username")
const status = await Usernamefield.isEnabled()
await expect(status).toBeTruthy()
await expect(Usernamefield).toBeFocused()
await expect(Usernamefield).toBeAttached()
await Usernamefield.fill("user1@gmail.com")
const GetFieldValue = await Usernamefield.inputValue()
expect(GetFieldValue).toEqual("user1@gmail.com")


const GenderBox = await page.locator('#male')
expect(GenderBox).not.toBeChecked()
GenderBox.check()
expect(GenderBox).toBeChecked()

            });

             test("verify for undefined and values", ()=> {
                    console.log("Hello")
    })
})
