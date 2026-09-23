/*

 -> Test Timeout : -> Default timeout for each of the test cases is 30sec
                   -> User can set different timeout of each test case using this line "test.setTimeout(40_000)"
                      - it will override the default timeout.
                   -> User can set different timeout for all test cases in group using below code.
                   ->     test.describe("Handle Alerts", async()=> {
                                    test.setTimeout(50_000) 
                                }
                   -> global test timeout: user can provide global test timeout from config file.
                        export default defineConfig({
                        timeout: 60_000, // global timeout for each test cases
                        )} 

 -> Navigation Timeout : 
                     -> total time take to load an website is called Navigation timeout.
                     -> step level navigation :  
                         -> await page.goto("https://testautomationpractice.blogspot.com/", {timeout: 20_000})

                      -> config level navigation timeout:
                      -> use: {
                                navigationTimeout : 25_000
                              }

 -> Global Timeout : -> Total test cases execution timeout will be updated in config file.
                     -> globalTimeout : 36_000_000,
                     -> All execution has to complete within given period of time.
                     
 -> Action Timeout -> await page.locator('#alertBtn').click({timeout: 10_000});
                   -> config level navigation timeout:
                    -> use: {
                                actionTimeout: 15_000,
                              }  


 -> Locator Timeout : locator timeout dependens of users requiremenst
                  -> const ButtonElement = page.locator('#alertBtn')
                    await ButtonElement.waitFor({state: "visible", timeout: 10_000})

                    
 -> Static Timeout : // static timeout: Runner has to wait till the test cases execution is paused.
                     await page.waitForTimeout(30_000)


-> Expect timeout:
                expect : {
                        timeout: 25_000
                        },

*/

import {expect, test} from '@playwright/test'

test.describe("Handle Alerts", async()=> {
    test.setTimeout(50_000) // set timeout for all test cases in this group.
    test("Simple Alerts: Accept", async({page})=> {
        test.setTimeout(40_000)
        await page.goto("https://testautomationpractice.blogspot.com/", {timeout: 20_000})
        page.on('dialog', dialog => {
             console.log(dialog.message()),
             dialog.accept()
        });
        // static timeout: Runner has to wait till the test cases execution is paused.
        await page.waitForTimeout(30_000)
        // Action timeout
        const ButtonElement = page.locator('#alertBtn')
        await ButtonElement.waitFor({state: "visible", timeout: 10_000})
        // expect timeout
        expect(ButtonElement).toBeEnabled({timeout: 20_000})
        await page.locator('#alertBtn').click({timeout: 10_000}); 
    });

    test("Confirm Alerts: Accept it", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        page.on('dialog', dialog => {
             console.log(dialog.message()),
             dialog.accept()
        });
        await page.locator('#confirmBtn').click(); 
        const DemoText = await page.locator("#demo").textContent()
        console.log(DemoText)
        expect(DemoText).toEqual("You pressed OK!")
    });

    test("Confirm Alerts: Dismiss it", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        page.on('dialog', dialog => {
             console.log(dialog.message()),
             dialog.dismiss()
        });
        await page.locator('#confirmBtn').click(); 
        const DemoText = await page.locator("#demo").textContent()
        console.log(DemoText)
        expect(DemoText).toEqual("You pressed Cancel!")
    });

    test("Prompt Alerts: Accept it", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        const UserInput = "John"
        page.on('dialog', dialog => {
             console.log(dialog.message()),
             dialog.accept(UserInput)
        });
        await page.locator('#promptBtn').click(); 
        const DemoText = await page.locator("#demo").textContent()
        console.log(DemoText)
        expect(DemoText).toEqual(`Hello ${UserInput}! How are you today?`)
    });

    test("Prompt Alerts: dismiss it", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        const UserInput = "John"
        page.on('dialog', dialog => {
             console.log(dialog.message()),
             dialog.dismiss()
        });
        await page.locator('#promptBtn').click(); 
        const DemoText = await page.locator("#demo").textContent()
        console.log(DemoText)
        expect(DemoText).toEqual("User cancelled the prompt.")
    });
});