import { test, expect } from '@playwright/test';
//import { LoginPage } from '../../Pages/saucedemo/LoginPages';
import { PageManager} from '../../Pages/Common/PageManager.ts'
import  *as Testdata from '../../testdata/testdata.ts'
test('User Login Test', async ({ page }) => {
    const pm = new PageManager(page); 
    await pm.loginPage.navigate(Testdata.SAUCELAB_URL);
    await pm.loginPage.login(Testdata.SAUCELAB_USERNAME, Testdata.SAUCELAB_PASSWORD);
    await pm.loginPage.VerifyDashboardHeading();
});   