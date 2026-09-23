import { test } from '@playwright/test';

test('pick locator example', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'APIs list for practice' }).click();
  await page.getByRole('button', { name: 'Test Cases' }).click();
  await page.getByRole('link', { name: 'Purchasing Business' }).click();
});