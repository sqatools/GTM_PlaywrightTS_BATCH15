import {test , expect} from '@playwright/test';

test('OrangeHRM Login Test', async ({ page }) => {
  // Navigate to the OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Enter Username
    await page.locator('input[name="username"]').fill("Admin");

    // Enter Password
    await page.locator('input[name="password"]').fill("admin123");

    // Click Login
    await page.locator('button[type="submit"]').click();

    // Verify login
    await expect(page).toHaveURL(/dashboard/);

    // 4. Click Admin 
  await page.getByRole('link', { name: 'Admin' }).click();

  // 5. Click Add button
  await page.getByRole('button', { name: 'Add' }).click();

  // 6. Select User Role
  await page.locator('.oxd-select-text').nth(0).click();
  await page.getByRole('option', { name: 'ESS' }).click();

  // 7. Enter Employee Name
  await page.getByPlaceholder('Type for hints...') .fill('John_1619  Doe');

   // Select employee from suggestion
  await page
    .getByRole('option', { name: /John_1619  Doe/i })
    .first()
    .click();

  // 8. Enter Username
  await page
    .locator('input')
    .nth(1)
    .fill('Kshitija');

  // 9. Select Status
  await page.locator('.oxd-select-text').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();

  // 10. Enter Password
  const passwordInputs = page.locator('input[type="password"]');

  await passwordInputs.nth(0).fill('Kshitija@1998');
  await passwordInputs.nth(1).fill('Kshitija@1998');

  // 11. Save
  await page.getByRole('button', { name: 'Save' }).click();
});