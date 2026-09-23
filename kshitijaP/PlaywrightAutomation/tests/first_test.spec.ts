import {test} from '@playwright/test'

test("Enter personal details dummy website", async ({page})=> {
    await page.goto("https://sqatools.in/dummy-booking-website/")

    await page.locator("#firstname").nth(0).fill("Kshitija")
    await page.locator("#firstname").nth(1).fill("Patare")
    await page.locator("#male").check()
});

test("Enter from and destination city", async ({page})=> {
    await page.goto("https://sqatools.in/dummy-booking-website/")

    await page.locator("#fromcity").fill("Pune")
    await page.locator("#destcity").fill("Mumbai")
});