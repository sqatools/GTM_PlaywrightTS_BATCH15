import {test} from '@playwright/test'
test("Enter personal details dummy website", async ({page}) => {


await page.goto("https://sqatools.in/dummy-booking-website/")
await page.locator("#firstname").nth(0).fill("Rahul")
await page.locator("#firstname").nth(1).fill("Gupta")
await page.locator("#male").check()

});

test("Enter the destination city", async({page}) => {
    await page.goto("https//sqatools.in/dummy-booking-website/")
    await page.locator("from city").fill("Indore")
    await page.locator("#density").fill("mumbai")
});


test("Search the product on amazon", async({page}) => {
await page.goto("https://www.amazon.in/")
await page.goto('https://www.amazon.in/b?node=14351766031');
await page.getByRole('link', { name: 'Sell', exact: true }).click();
await page.getByRole('link', { name: 'Sell', exact: true }).click();
await page.getByRole('link', { name: 'Bestsellers' }).click();
});