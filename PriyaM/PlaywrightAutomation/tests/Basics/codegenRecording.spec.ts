import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sqatools.in/');
  await page.locator('.grippy-host').click();
  await page.getByRole('link', { name: 'Automation Practice Page' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('Mohit');
  await page.getByRole('textbox', { name: 'Enter username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Awashthi');
  await page.getByText('Enter address').click();
  await page.getByText('Enter address').fill('Mohit');
  await page.getByText('Radio Buttons Male Female').click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Java' }).check();
  await page.getByRole('checkbox', { name: 'Python' }).check();
  await page.locator('#country').selectOption('india');
  await page.locator('#skills').selectOption('Selenium');
  await page.locator('#skills').selectOption(['Python', 'Selenium']);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm Alert' }).dblclick();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('BullseyeCoverageError.txt');
  await page.locator('#datePicker').fill('2026-08-26');
  await page.locator('#timePicker').fill('22:34');
  await page.locator('section').filter({ hasText: 'Date and Time Pickers' }).click();
  await page.locator('#dateTimePicker').fill('2026-08-11T22:37');
  await page.locator('section').filter({ hasText: 'Date and Time Pickers' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Google' }).click();
  const page1 = await page1Promise;
  await page.getByText('Drag Me').click();
  await page.getByText('Drag and Drop Drag Me Drop').click();
  await page.getByText('Drag Me').click();
});