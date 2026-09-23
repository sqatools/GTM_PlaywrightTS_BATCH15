import { test } from '@playwright/test';
//import { LoginPage } from '../../Pages/SauceLabs/LoginPage';  
import { PageManager } from '../../Pages/Common/PageManager';   

import * as TestData from '../../TestData/TestData'

test('User Login Test', async ({ page }) => {

    const pm = new PageManager(page);
    await pm.LoginPage.Navigat(TestData.SAUCE_LABURL);
    await pm.LoginPage.login(TestData.USERNAME, TestData.PASSWORD);
    await pm.LoginPage.verifyDashboardHeading();
});

