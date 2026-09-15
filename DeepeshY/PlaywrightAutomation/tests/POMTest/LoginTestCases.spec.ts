import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.ts';

test('User Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage("https://www.saucedemo.com/");
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyDashboardHeading();
});