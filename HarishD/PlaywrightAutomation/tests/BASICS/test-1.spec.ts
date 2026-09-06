// click on beaker click on new it will create a new file and then you can write your 
// test cases in that file
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('button', { name: 'Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 2: Login User with' }).click();
  await page.locator('#collapse2').getByText('2. Navigate to url \'http://').click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 6: Contact Us Form' }).click();
});

//Test case2: 
//click on beaker in the tools select record a courser it will open a new window
//  and then you can write your test cases in that file

test('test1', async ({ page }) => {
await page.goto('https://sqatools.in/');
await page.getByRole('link', { name: 'Home' }).click();
await page.locator('iframe[name="aswift_9"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
await page.getByRole('link', { name: 'Dummy Booking Website' }).click();
const page1Promise = page.waitForEvent('popup');
  await page.locator('#post-19066').getByRole('link', { name: 'Login Page' }).click();
  const page1 = await page1Promise;
await page1.getByRole('textbox', { name: 'Email', exact: true }).click();
await page1.getByRole('textbox', { name: 'Email', exact: true }).fill('abcd');
await page1.getByRole('textbox', { name: 'Password' }).click();
await page1.getByRole('textbox', { name: 'Password' }).fill('adcd@123');
await page1.getByRole('button', { name: 'Log in' }).click();

})