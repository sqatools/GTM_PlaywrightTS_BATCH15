import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sqatools.in/');
  await page.getByRole('link', { name: 'Python Selenium', exact: true }).click();
  await page.getByRole('link', { name: 'XPath Fundamentals' }).click();
  await page.getByRole('link', { name: 'Next >>' }).click();
  await page.getByRole('link', { name: 'Next >>' }).click();
});

