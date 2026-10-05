import { test } from '../fixtures/BaseFixture.ts'
import * as testdata from '../testdata/testdata'
//import {PageManager} from ''

test.describe("Automation Test Cases", async ()=>{
    test("Login to the Application", async({pManager}) =>{

        await pManager.loginPage.navigate(testdata.Saucelab.login.url)
        await pManager.loginPage.login(testdata.Saucelab.login.ValidCred.username,
         testdata.Saucelab.login.ValidCred.password
        )

await pManager.page.waitForTimeout(3000)

    })
})