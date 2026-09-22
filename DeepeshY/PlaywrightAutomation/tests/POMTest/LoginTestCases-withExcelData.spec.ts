import { test } from '@playwright/test';
import { PageManager } from '../../pages/common/pageManager.ts';
import { Utils } from '../../utils/utilities.ts';
import * as TestData from '../../testdata/testdata.ts'

test.describe("Feature Automation", ()=> {
    test("Read Excel data", async({page})=> {
        const filepath = "testdata/credentials.xlsx"
        const UtilObj = new Utils()
        const data = UtilObj.ReadExcelData(filepath)
        console.log(data)
        for (var userValues of data) {
            console.log(userValues)
        }


    })
    
    test('User Login Test', async ({ page }) => {
        const pm = new PageManager(page);
        const filepath = "testdata/credentials.xlsx"
        const UtilObj = new Utils()
        const Exceldata:any = UtilObj.ReadExcelData(filepath)
        for (var data of Exceldata) {
            console.log(data)
            await pm.loginPage.navigate(TestData.SAUCELAB_URL);
            await pm.loginPage.login(data.Username, data.Password);
            //await pm.loginPage.verifyDashboardHeading();
        }
    });

});