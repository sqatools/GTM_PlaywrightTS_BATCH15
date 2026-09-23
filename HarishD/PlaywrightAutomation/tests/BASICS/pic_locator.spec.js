import {test} from '@playwright/test';

test("add to cart", async ({page}) => {    

   await page.goto("https://automationexercise.com/")
   await page.getByRole('link', { name: ' Cart' }).click()
   await page.getByRole('link', { name: ' Test Cases' }).click()
})