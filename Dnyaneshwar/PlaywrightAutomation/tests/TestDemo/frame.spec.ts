import {test,expect} from '@playwright/test'


test("Handle Alert ",async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const frameName=page.frameLocator("#courses-iframe")
await frameName.locator("li a[href*='lifetime-access']:visible").click();

const text=await frameName.locator(".text h2").textContent();

console.log(text?.split(" ")[1])
})



