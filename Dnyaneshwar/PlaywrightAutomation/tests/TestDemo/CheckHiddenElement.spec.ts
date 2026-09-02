import {test,expect} from '@playwright/test'


test("check hiddenelement",async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

await page.locator("#displayed-text").isVisible();

await page.locator("#hide-textbox").click();

await page.locator("#displayed-text").isHidden();




})