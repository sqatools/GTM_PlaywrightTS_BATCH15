import {test} from '../../fixture/baseFixture';
import {expect} from '@playwright/test'
import  * as TestData from '../../testdata/testdata'

test.describe("Login feature test cases", () =>{
test("login with valid ceadential and verify", async({Pmanager})=>{
await Pmanager.loginPage.navigate(TestData.saucelab.login.url)
await Pmanager.loginPage.login(
    TestData.saucelab.login.validcred.username,
    TestData.saucelab.login.validcred.password)

 await (Pmanager.loginPage.verifyDashboardHeading())
 await Pmanager.page.waitForTimeout(3_000)
})
}) 