import { test } from '@playwright/test';
//import { LoginPage } from '../../Pages/SauceLabs/LoginPage';  
import { PageManager } from '../../Pages/Common/PageManager';   
import { Utils } from '../../utils/utilities'; 

import * as TestData from '../../TestData/TestData'
// test.describe("feature Automation ",async()=>{

//    test("Read Excel Data", async () => {

//         const filepath = './TestData/credentilas.xlsx';

//         const utilObj = new Utils();

//         const data = utilObj.ReadExcelData(filepath);

//         console.log(data);

//         for(var userValue of data)
//         {
//             console.log(userValue)
//         }

//     });

// test('User Login Test', async ({ page }) => {

//     const pm = new PageManager(page);

//     const filepath = './TestData/credentilas.xlsx';

//         const utilObj = new Utils();

//         const Exceldata :any= utilObj.ReadExcelData(filepath);

//         for(var d of Exceldata)
//         {

//             console.log(d)
//     await pm.LoginPage.Navigat(TestData.SAUCE_LABURL);
//     await pm.LoginPage.login(d.UserName, d.Password);
//      await page.waitForTimeout(3000);

//      await page.pause()
//     //await pm.LoginPage.verifyDashboardHeading();
//         }
        
// });
// })

test('User1 Login Test', async ({ browser }) => {

    const filepath = './TestData/credentials.xlsx';

    const utilObj = new Utils();
    const Exceldata: any = utilObj.ReadExcelData(filepath);

    for (const d of Exceldata) {

        console.log("Testing:", d.UserName);

        // Create fresh browser context for each user
        const context = await browser.newContext();
        const page = await context.newPage();

        const pm = new PageManager(page);

        await pm.LoginPage.Navigat(TestData.SAUCE_LABURL);

        await pm.LoginPage.login(d.UserName, d.Password);

        console.log("Login completed:", d.UserName);

        await page.waitForTimeout(2000);

        // Close this user's session
        await context.close();
    }
});

test('User Login Test', async ({ page }) => {

    const pm = new PageManager(page);

    const filepath = './TestData/credentials.xlsx';

    const utilObj = new Utils();
    const Exceldata: any = utilObj.ReadExcelData(filepath);

    console.log("Excel Data:", Exceldata);

    for (const d of Exceldata) {

        console.log("Username:", d.UserName);
        console.log("Password:", d.Password);

        await pm.LoginPage.Navigat(TestData.SAUCE_LABURL);

        console.log("Navigation completed");

        await pm.LoginPage.login(d.UserName, d.Password);

        console.log("Login completed");

        await page.waitForTimeout(30000);
    }

    
});

