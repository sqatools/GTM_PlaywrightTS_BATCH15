import { test } from '@playwright/test';
import { LoginPage } from '../../Pages/Loginpage.ts';

test('User Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.verifyDashboardVisible();
});