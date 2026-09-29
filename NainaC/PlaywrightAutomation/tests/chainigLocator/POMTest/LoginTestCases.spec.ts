
import { test } from '@playwright/test';
//import { LoginPage } from '../../../Pages/Page/SauceLab/loginPage';

import {PageManager} from '../../../Pages/Page/Common/pageManager';
import * as TestData from '../../../testdata/testdata'
test('User Login Test', async ({ page }) => {

    const pm  = new PageManager(page);
    await pm.loginPage.navigate(TestData.SAUCELAB_URL);
    await pm.loginPage.login(TestData.SAUCELAB_USERNAME, TestData.SAUCELAB_PASSWORD);

    await pm.loginPage.verifyDashboardHeading();
});
