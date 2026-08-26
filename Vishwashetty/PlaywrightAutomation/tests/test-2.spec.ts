import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://automationexercise.' }).click();
  const page1 = await page1Promise;
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://automationexercise.' }).click();
  const page1 = await page1Promise;
});