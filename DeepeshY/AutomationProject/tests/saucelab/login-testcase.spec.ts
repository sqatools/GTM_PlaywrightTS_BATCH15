import { expect } from '@playwright/test'
import {test} from '../../fixtures/baseFixture.ts'
import * as TestData from '../../testdata/testdata.ts'

test.describe("Login Feature Test Cases :", ()=> {
    test("Login with valid credentials and verify", async({PManager})=> {
c
        await PManager.page.waitForTimeout(3_000)
    })
})