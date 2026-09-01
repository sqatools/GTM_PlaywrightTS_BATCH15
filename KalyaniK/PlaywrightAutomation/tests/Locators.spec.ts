import {test} from '@playwright/test'

test('locatorsprctc',async({page})=>{

    await page.goto("https://automationexercise.com/");
    await page.getByRole('link',{name : 'products'}).click();
})