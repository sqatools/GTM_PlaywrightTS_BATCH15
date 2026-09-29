import { test } from "../../fixture/baseFixture";
import * as testdata from '../../testdata/testdata.ts'

test("login test case with valid credential", async ({ pManager }) => {

    await pManager.loginpage.navigate(testdata.saucelab.login.url);

    await pManager.loginpage.login(
        testdata.saucelab.login.validCred.username,
        testdata.saucelab.login.validCred.password
    );

    await pManager.page.waitForTimeout(15_000)
    //await pManager.loginpage.loginButton.click();

});