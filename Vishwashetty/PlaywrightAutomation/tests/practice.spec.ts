import test from '@playwright/test';   
test('Open news18 web page', async ({ page }) => {
    await page.goto('https://www.news18.com/');
});
