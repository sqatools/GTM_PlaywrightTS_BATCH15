import { test } from '@playwright/test';
import { PageManager} from '../../Pages/Common/PageManager.ts'
import { Utils } from '../../utils/utils.ts';  // imported utils file
import * as TestData from '../../testdata/testdata.ts'  

test.describe("Feature Automation", ()=> {
    test("Read Excel data", async({page})=> {
        const filepath = "testdata/credentials.xlsx"    // file path
        const UtilObj = new Utils()          // craeted a obj for Util
        const data = UtilObj.ReadExcelData(filepath) 
        console.log(data)
        for (var userValues of data) {
            console.log(userValues)
        }
    })
    
    test('User Login Test', async ({ page }) => {
        const pm = new PageManager(page); 
        const filepath = "testdata/credentials.xlsx"    // file path
        const UtilObj = new Utils()          // craeted a obj for Util
        const Exceldata :any = UtilObj.ReadExcelData(filepath)  //any is using 
        console.log(Exceldata)
         for (var data of Exceldata) {
        await pm.loginPage.navigate(TestData.SAUCELAB_URL);
         await pm.loginPage.login(data.Username, data.Password);
        // await pm.loginPage.VerifyDashboardHeading();
         }
    });   
});
