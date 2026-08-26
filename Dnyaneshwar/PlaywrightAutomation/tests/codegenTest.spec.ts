
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('samsung');
  await page.goto('https://www.amazon.in/s?k=samsung&crid=3KT1N852SF660&sprefix=samsung%2Caps%2C249&ref=nb_sb_noss_2');
  await page.locator('#a-autoid-3').getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Go to Cart' }).click();
  await page.locator('#sc-gift i').click();
});