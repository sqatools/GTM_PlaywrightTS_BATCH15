import { test } from '../../Fixture/BaseFixtureJson.ts'
import *as Testdata from '../../testdata/testdata.ts'


test.describe("Fixture test cases", () => {
    test('User Login Test1', async ({ pageM }) => {
        await pageM.loginPage.navigate(Testdata.SAUCELAB_URL);
        await pageM.loginPage.login(Testdata.SAUCELAB_USERNAME, Testdata.SAUCELAB_PASSWORD);
        await pageM.loginPage.VerifyDashboardHeading();
    });


    // Uisng JSON
   test('User Login Test2', async ({ pageM, UserData }) => {
    await pageM.loginPage.navigate(UserData.url);
    console.log(UserData);
    await pageM.loginPage.login(UserData.login.username,UserData.login.password);
    await pageM.loginPage.VerifyDashboardHeading();
});

})