import { test } from '@playwright/test';
import { PageManager } from '../../pages/common/pageManager.ts';
import * as TestData from '../../testdata/testdata.ts'

test('User Login Test', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.loginPage.navigate(process.env.BASE_URL!);
    console.log(process.env.TEST_ENV)
    console.log(process.env.USERNAME_VALUE!)
    console.log(process.env.PASSWORD_VALUE!)
    await pm.loginPage.login(process.env.USERNAME_VALUE!, process.env.PASSWORD_VALUE!);
    await pm.loginPage.verifyDashboardHeading();
});