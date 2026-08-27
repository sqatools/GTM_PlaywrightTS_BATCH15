import { test, expect } from '@playwright/test';

test.only('locator test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');    
  await page.locator("//input[@placeholder='email@example.com']").fill('dnyaneshwar');
  await page.locator("//input[@id='userPassword']").fill('dnyaneshwar');

  await page.locator("  #loginbutton").click();   
 // await page.pause();

})


