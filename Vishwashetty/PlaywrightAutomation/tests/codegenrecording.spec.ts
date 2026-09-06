import { test, expect } from '@playwright/test';

test('test111', async ({ page }) => {
  await page.goto('https://www.news18.com/explainers/3000-jobs-22-exams-4-possible-outcomes-what-happens-after-jharkhand-hc-stays-state-govt-decision-10284568.html');
});await page.goto('https://automationexercise.com/');
await page.getByRole('button', { name: 'APIs list for practice' }).click();
await page.getByRole('link', { name: 'API 1: Get All Products List' }).click();
await page.locator('#collapse1').getByText('Request Method: GET').click();
await page.getByRole('link', { name: 'API 5: POST To Search Product' }).click();
await page.getByText('Request Parameter: search_product (For example: top, tshirt, jean)').click();