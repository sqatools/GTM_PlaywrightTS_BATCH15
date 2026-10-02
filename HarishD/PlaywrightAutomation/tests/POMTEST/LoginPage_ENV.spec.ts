import { test, expect } from '@playwright/test';
//import { LoginPage } from '../../Pages/saucedemo/LoginPages';
import { PageManager} from '../../Pages/Common/PageManager.ts'
import  *as Testdata from '../../testdata/testdata.ts'
test('User Login Test', async ({ page }) => {
    const pm = new PageManager(page); 
    await pm.loginPage.navigate(process.env.Base_Url!);
    console.log(process.env.TEST_ENV)
    console.log(process.env.username_value!)
    console.log(process.env.Password_value!)
    await pm.loginPage.login(process.env.username_value!, process.env.Password_value!);
    await pm.loginPage.VerifyDashboardHeading();
});   