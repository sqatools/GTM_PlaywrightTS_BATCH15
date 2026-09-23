import { expect, test } from '@playwright/test';

test.describe('alert handling', () => {
  test('alert handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.locator('#alertBtn').click();
  });

  test('confirm alert handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.locator('#confirmBtn').click();

    const demoText = await page.locator('#demo').textContent();
    console.log(demoText);
    expect(demoText).toEqual('You pressed OK!');
  });

  test('Prompt Alerts: Accept it', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const userInput = 'John';

    page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept(userInput);
    });

    await page.locator('#promptBtn').click();

    const demoText = await page.locator('#demo').textContent();
    console.log(demoText);
    expect(demoText).toEqual(`Hello ${userInput}! How are you today?`);
  });
});