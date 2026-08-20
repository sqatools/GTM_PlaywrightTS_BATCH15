import {test} from '@playwright/test';


test("Add to cart", async({page})=> {

await page.goto('https://sqatools.in/');
await page.getByRole('link', { name: 'Tutorials', exact: true }).click();
await page.locator('iframe[name="aswift_9"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
await page.getByRole('link', { name: 'Python Features' }).click();
await page.getByRole('heading', { name: 'Automation and Scripting' }).click();
await page.getByRole('heading', { name: 'Automation and Scripting' }).click();
await page.getByRole('link', { name: 'Dummy Booking Website' }).click();
const page1Promise = page.waitForEvent('popup');
  await page.locator('#post-19066').getByRole('link', { name: 'Login Page' }).click();
  const page1 = await page1Promise;
await page1.getByRole('button', { name: 'Create new account' }).click();
await page1.getByRole('button', { name: 'Create new account' }).click();
await page1.getByRole('button', { name: 'Create new account' }).click();
});