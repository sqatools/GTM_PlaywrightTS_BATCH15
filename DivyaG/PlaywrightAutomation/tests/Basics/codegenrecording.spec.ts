import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sqatools.in/');
  await page.getByRole('link', { name: 'Courses' }).click();
  await page.getByRole('link', { name: 'Automation Practice Page' }).click();
  await page.goto('https://sqatools.in/automation-practice-page/');
  await page.getByRole('link', { name: 'Automation Practice Page' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('divya');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('uudi');
  await page.getByText('Enter address').click();
  await page.getByText('Enter address').fill('Enter addresshyderabad');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('checkbox', { name: 'Java' }).check();
  await page.locator('#country').selectOption('india');
  await page.locator('#skills').selectOption('Selenium');
  await page.getByText('Multi Select Dropdown Python').click();
  await page.getByRole('button', { name: 'Normal Button' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  await page.locator('#datePicker').fill('2026-08-24');
  await page.locator('#timePicker').fill('23:21');
  await page.locator('section').filter({ hasText: 'Date and Time Pickers' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('demoFile.txt');
});