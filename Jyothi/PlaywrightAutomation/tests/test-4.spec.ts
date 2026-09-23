import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByText('Add to cart').nth(1).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByText('Add to cart').nth(5).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.goto('https://automationexercise.com/#google_vignette');
});