import {test} from '@playwright/test'

test('getByPlaceholderMethod',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
await page.getByLabel("Your Age:").fill("35");

})