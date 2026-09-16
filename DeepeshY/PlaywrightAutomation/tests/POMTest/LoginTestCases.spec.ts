import { test } from '@playwright/test';
//import { LoginPage } from '../../pages/saucelab/LoginPage.ts';
import { PageManager } from '../../pages/common/pageManager.ts';
import * as TestData from '../../testdata/testdata.ts'

test('User Login Test', async ({ page }) => {

    const pm = new PageManager(page);
    await pm.loginPage.navigate(TestData.SAUCELAB_URL);
    await pm.loginPage.login(TestData.SAUCELAB_USERNAME, TestData.SAUCELAB_PASSWORD);
    await pm.loginPage.verifyDashboardHeading();
});