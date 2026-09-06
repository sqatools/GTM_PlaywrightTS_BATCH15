import {test} from '@playwright/test'

test("enter user details", async({page})=>{

await page.goto("https://www.google.com")

await page.locator(".RNmpXc").nth(1).click();

  
})

test ("enter good search as India ",async({page})=>{

  await page.goto("https://www.google.com")

  await page.locator(".gLFyf").fill("India")  
})