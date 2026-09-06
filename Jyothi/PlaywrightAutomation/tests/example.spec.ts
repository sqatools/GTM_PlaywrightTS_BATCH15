import { test } from '@playwright/test';

test("Enter personal details dummy website", async ({ page }) => {
    await page.goto("https://sqatools.in/dummy-booking-website/");

    await page.locator("#firstname").nth(0).fill("Rahul");
    await page.locator("#firstname").nth(1).fill("Gupta");
    await page.locator("#male").check();
});


//p[text()='Hands-on Learning']
//h2[text()=' Why Learn With SQA Tools?']
//h2[text()='What We Offer']
//input[@class="a-button-input"]