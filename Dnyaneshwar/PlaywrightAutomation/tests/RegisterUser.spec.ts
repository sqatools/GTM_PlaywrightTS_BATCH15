import { test, expect } from '@playwright/test';

test.only('Register user', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');  
  await page.locator(".text-reset").click();
  await page.locator("#firstName").fill("Dnyaneshwar");
  await page.locator("#lastName").fill("Patil");
  await page.locator("#userEmail").fill("ddandale14@gmail.com");
  await page.locator("#userMobile").fill("9545291992");
  await page.locator("#userPassword").fill("dnyaneshwar");
  await page.locator("#confirmPassword").fill("dnyaneshwar");
  await page.locator("//input[@type='checkbox']").check();
  await page.locator("select.custom-select").selectOption("3: Engineer");
  await page.locator("input[value='Male']").click();
  await expect(await page.locator("input[value='Male']")).toBeChecked();
  //await console.log(page.locator("input[value='Male']").last().isChecked())

  //await page.locator(".col-md-1").check();

 //await page.locator(".col-md-1").uncheck();

  await page.locator("#login").click();


  //page.pause();
  
})