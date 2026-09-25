import { expect } from '@playwright/test'
import {test} from '../../fixtures/baseFixture.ts'
import * as TestData from '../../testdata/testdata.ts'

test.describe("Login Feature Test Cases :", ()=> {
    test("Login with valid credentials and verify", async({PManager})=> {
        await PManager.loginpage.navigate(TestData.SauceLab.login.url)
        await PManager.loginpage.login(
            TestData.SauceLab.login.validcred.username,
            TestData.SauceLab.login.validcred.password
        )
        await PManager.loginpage.VerifyDashBoardHeading()
        await PManager.page.waitForTimeout(3_000)
    })
})