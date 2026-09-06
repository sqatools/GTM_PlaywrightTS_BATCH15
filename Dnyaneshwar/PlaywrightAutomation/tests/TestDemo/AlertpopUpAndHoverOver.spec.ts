import {test,expect} from '@playwright/test'


test("Handle Alert ",async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

await page.on('dialog',dialog =>dialog.accept());
await page.locator("#confirmbtn").click();

// hover over
await page.locator("#mousehover").hover();

await page.pause();

})



