import { expect, test } from '@playwright/test';

test('Add a new user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Add' }).click();

  await page.locator('.oxd-select-text').nth(0).click();
  await page.getByText('ESS', { exact: true }).click();

  await page.getByPlaceholder('Type for hints...').fill('Manda');
  const employeeOption = page.locator('.oxd-autocomplete-option:visible').first();
  await expect(employeeOption).toBeVisible();
  await employeeOption.click();

  await page.locator('.oxd-select-text').nth(1).click();
  await page.getByText('Enabled', { exact: true }).click();

  const username = `testuser${Date.now()}`;
  await page.locator('.oxd-input-group').filter({ hasText: 'Username' }).locator('input').fill(username);
  await page.locator('input[type="password"]').nth(0).fill('Test@12345');
  await page.locator('input[type="password"]').nth(1).fill('Test@12345');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('.oxd-toast')).toContainText('Successfully Saved');
});
