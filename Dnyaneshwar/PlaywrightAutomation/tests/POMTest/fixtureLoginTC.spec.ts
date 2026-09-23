import { test } from '../../Fixture/baseFixture';
//import * as testData from '../../TestData/TestData'
//import { LoginPage } from '../../Pages/SauceLabs/LoginPage';  
//import { PageManager } from '../../Pages/Common/PageManager';   

import * as TestData from '../../TestData/TestData'

test.describe("Fecture test case ", async () => {

    test('User Login Test', async ({ PageM }) => {

        //const pm = new PageManager(page);
        await PageM.LoginPage.Navigat(TestData.SAUCE_LABURL);
        await PageM.LoginPage.login(TestData.USERNAME, TestData.PASSWORD);
        await PageM.LoginPage.verifyDashboardHeading();
    });

    test("User login test using json", async ({ PageM, userdata }) => {
        //await pageM.loginPage.navigate(UserData.url)
        await PageM.LoginPage.Navigat(userdata.url)

        console.log(userdata)

        await PageM.LoginPage.login(userdata.login.username, userdata.login.password)

        await PageM.LoginPage.verifyDashboardHeading();

    })

})
