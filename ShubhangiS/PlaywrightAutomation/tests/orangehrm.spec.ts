import { test, expect } from '@playwright/test';
test.setTimeout(120000);

test('Add User from Admin page', async ({ page }) => {
    const uniqueUsername = `Shubhangi${Date.now()}`;

    // Login
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        { waitUntil: 'load', timeout: 90000 }
    );

    await expect(page.locator('input[name="username"]')).toBeVisible();
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/dashboard$/);

    // Go to Admin
    await page.locator('aside').getByRole('link', { name: 'Admin' }).click();
    await expect(page).toHaveURL(/\/admin\/viewSystemUsers/);

    // Click Add
    await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    await page.getByRole('button', { name: 'Add' }).click();

    // User Role
    const roleDropdowns = page.locator('.oxd-select-text');
    await expect(roleDropdowns.nth(0)).toBeVisible();
    await roleDropdowns.nth(0).click();
    await page.getByRole('option', { name: 'ESS' }).click();

    // Employee Name
    const employeeName = page.locator('input[placeholder="Type for hints..."]');
    await expect(employeeName).toBeVisible();
    await employeeName.fill('Shubhangi');
    const employeeOption = page.locator('.oxd-autocomplete-option').filter({ hasText: /Shubhangi/i }).first();
    await expect(employeeOption).toBeVisible();
    await employeeOption.click();

    // Status
    await expect(roleDropdowns.nth(1)).toBeVisible();
    await roleDropdowns.nth(1).click();
    await page.getByRole('option', { name: 'Enabled' }).click();

    // Username
    await page
        .locator('div.oxd-input-group')
        .filter({ hasText: 'Username' })
        .locator('input')
        .fill(uniqueUsername);

    // Password
    await page.locator('input[type="password"]').nth(0).fill('Test@12345');

    // Confirm Password
    await page.locator('input[type="password"]').nth(1).fill('Test@12345');

    // Save
    await page.getByRole('button', { name: 'Save' }).click();

    // Wait for the User Management page/table
    await page.waitForURL(/\/admin\/viewSystemUsers/);
    await expect(page.locator('div.oxd-table-card')).toBeVisible();

    // Verify created username
    await expect(page.locator('div.oxd-table-card').getByText(uniqueUsername, { exact: true })).toBeVisible();
});