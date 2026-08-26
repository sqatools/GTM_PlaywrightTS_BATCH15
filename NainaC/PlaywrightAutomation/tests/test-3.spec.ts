import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://automationexercise.com/")
  await page.getByRole('heading', { name: 'AutomationExercise' }).click();
  await page.getByRole('button', { name: 'Test Cases' }).click();
});