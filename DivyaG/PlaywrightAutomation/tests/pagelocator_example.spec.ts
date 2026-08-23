import {test} from '@playwright/test'

test("Add to cart",async({page})=>{
await page.goto("https://automationexercise.com/")
await page.getByRole('link', { name: ' Products' }).click();
await page.getByRole('link', { name: ' Test Cases' }).click();

})