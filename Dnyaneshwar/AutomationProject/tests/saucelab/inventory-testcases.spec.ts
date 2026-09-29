import { test } from '../../fixture/baseFixture'
// import *as testdata from '../../testdata/testdata.ts'

import * as testdata from '../../testdata/testsdata.json'

test.describe("inventory test cases", async () => {

    test("automate inventory page", async ({ pManager }) => {
        await pManager.loginpage.navigate(testdata.saucelab.url);

        await pManager.loginpage.login(
            testdata.saucelab.username,
            testdata.saucelab.password
        );

        await pManager.invenPage.addItemInCart(testdata.saucelab.itemname);
        await pManager.invenPage.CheckItemInCart(testdata.saucelab.itemname);
        await pManager.invenPage.RemoveItemFromCart(testdata.saucelab.itemname)

    })
})