import { test } from '@playwright/test';
import { LoginPage } from '../../Pages/Loginpage.ts';

test('User Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('admin', 'admin123');

    await loginPage.verifyDashboardVisible();
});