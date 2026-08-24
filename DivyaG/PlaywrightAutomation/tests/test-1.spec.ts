import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'APIs list for practice' }).click();
  await page.getByRole('link', { name: 'API 1: Get All Products List' }).click();
  await page.getByRole('link', { name: 'API 2: POST To All Products' }).click();
  await page.locator('#header').getByRole('listitem').filter({ hasText: 'Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 1: Register User' }).click();
});

test('test recording 2', async ({ page }) => {
await page.goto('https://automationexercise.com/');
await page.getByRole('link', { name: ' Products' }).click();
await page.getByRole('link', { name: ' Test Cases' }).click();

});