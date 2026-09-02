import { test, expect } from '@playwright/test';

test.only('Login to Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('#nav-link-accountList-nav-line-1').click();   
  await page.locator('#ap_email_login').fill('9545291992');
  await page.locator('#continue').click();
  await page.locator('#ap_password').fill('Dnyaneshwar@123');
  await page.locator('#signInSubmit').click();  
  //console.log(await page.locator('div.a-alert-content').nth(1).textContent());

await page.locator("input[type='text']").fill('samsung');
await page.locator("div.s-suggestion").nth(4).click();
console.log(await page.locator("span.a-size-medium.a-color-base").first().textContent());

var AllTitle=await  page.locator("span.a-size-medium.a-color-base").allTextContents();
console.log(AllTitle);

//await page.pause();


} )
