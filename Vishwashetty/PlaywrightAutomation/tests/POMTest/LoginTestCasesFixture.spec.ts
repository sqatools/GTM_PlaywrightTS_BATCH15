import { test } from '../../fixtures/baseFixture.ts'
import * as TestData from '../../testdata/testdata.ts'

test.describe("Fxiture Test cases", ()=> {
        test('User Login Test', async ({ pageM }) => {
            await pageM.loginPage.navigate(TestData.SAUCELAB_URL);
            await pageM.loginPage.login(TestData.SAUCELAB_USERNAME, TestData.SAUCELAB_PASSWORD);
            await pageM.loginPage.verifyDashboardHeading();
        });


        test('User Login Test Case2 to read value from json', async ({ pageM , UserData}) => {
            await pageM.loginPage.navigate(UserData.url)
            console.log(UserData)
            await pageM.loginPage.login(UserData.login.username, UserData.login.password);
            await pageM.loginPage.verifyDashboardHeading();
        });

});