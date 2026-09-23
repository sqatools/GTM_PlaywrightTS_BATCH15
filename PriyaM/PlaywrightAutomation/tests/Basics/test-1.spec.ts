import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'APIs list for practice' }).click();
  await page.getByRole('link', { name: 'API 1: Get All Products List' }).click();
  await page.getByRole('link', { name: 'API 2: POST To All Products' }).click();
  await page.locator('div').filter({ hasText: 'API 3: Get All Brands List' }).nth(3).click();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 2: Login User with' }).click();
});


test('test recording test 2', async ({ page }) => {
    await page.goto('https://sqatools.in/');
    await page.getByRole('link', { name: 'Dummy Booking Website' }).click();
    await page.locator('iframe[name="aswift_4"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Cab booking and return date – $' }).getByRole('radio').check();
    await page.locator('#firstname').first().dblclick();
    await page.locator('#firstname').first().fill('JOhn');
    await page.locator('#firstname').first().press('Tab');
    await page.locator('#firstname').nth(1).fill('Miller');
    await page.locator('#birthday').fill('2026-08-11');
    await page.locator('#male').check();
    await page.locator('#fromcity').click();
    await page.locator('#fromcity').click();
    await page.locator('#fromcity').fill('Pune');
    await page.locator('#fromcity').press('Tab');
    await page.locator('#destcity').fill(' Mumbai');
});
