import { expect } from '@playwright/test'
import {test} from '../../fixtures/baseFixtures.ts'

import *as TestData from '../../testdata/testdata.ts'

test.describe("Login to the Saucelab testcase ",async()=>{

    test("Login with valid credentials",async({PManager})=>{

        // await PManager.loginpage.navigate("TestData.SAUCELAB.url")
        // await PManager.loginpage.login("standard_user","secret_sauce")
         await PManager.loginpage.navigate(TestData.SAUCELAB.login.url),
        await PManager.loginpage.login(TestData.SAUCELAB.login.validcredentials.username,
            TestData.SAUCELAB.login.validcredentials.password)
        await PManager.loginpage.VerifyDashBoardHeading()
        await PManager.BrowserPage.waitForTimeout(20_000)

    })

})