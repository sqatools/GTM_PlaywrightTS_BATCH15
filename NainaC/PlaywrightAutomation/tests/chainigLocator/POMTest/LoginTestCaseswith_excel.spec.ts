
import { test } from '@playwright/test';

//import {PageManager} from "../../Pageso/Common/pageManager";
import {Utils} from '../../../utils/utilities';
import * as TestData from '../../../testdata/testdata'

test.describe("Feature Automation", () => {
    test("Read Excel Data", async() =>{
        const filePath = '../../../testdata/Credentials.xlsx'
        const utilObj = new Utils()
        const data = utilObj.ReadExcelData(filePath);
        console.log(data)

        for(var userValues of data) {
            console.log(userValues)
        }
    } )
} )
//test('User Login Test', async ({ page }) => {

   // const pm  = new PageManager(page);
   // await pm.loginPage.navigate(TestData.SAUCE_LAB_URL);
    //await pm.loginPage.login(TestData.SAUCELAB_USERNAME, TestData.SAUCELAB_PASSWORD);

    //await pm.loginPage.verifyDashboardHeading();
//});
