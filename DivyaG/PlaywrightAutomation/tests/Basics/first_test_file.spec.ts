/* import {test} from '@playwright/test'

test("Enter personal details dummy website", async ({page})=> {
    await page.goto("https://sqatools.in/dummy-booking-website/")

    await page.locator("#firstname").nth(0).fill("Rahul")
    await page.locator("#firstname").nth(1).fill("Gupta")
    await page.locator("#male").check()
});

test("Enter from and destination city", async ({page})=> {
    await page.goto("https://sqatools.in/dummy-booking-website/")

    await page.locator("#fromcity").fill("Indore")
    await page.locator("#destcity").fill("Mumbai")
}); */

import {test} from '@playwright/test'

test("Enter Dummy Personal Details", async({page}) => {
    await page.goto("https://sqatools.in/dummy-booking-website/")
    await page.locator('#firstname').nth(0).fill("Divya")
    await page.locator("#firstname").nth(1).fill("Gudivada")
    await page.locator('#male').check()

});

test("Enter from and destination cities", async({page}) =>{
await page.goto("https://sqatools.in/dummy-booking-website/")
await page.locator('#fromcity').fill("Hyderabad")
await page.locator('#destcity').fill("Bangalore")

});
