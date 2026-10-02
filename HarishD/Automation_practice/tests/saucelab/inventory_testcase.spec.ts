import {test} from '../../fixtures/baseFixtures.ts'

import *as TestData from '../../testdata/testdata.ts'

test.describe("inventory test caee ",async()=>{

    test("inventory page",async({PManager})=>{
 
        await PManager.loginpage.navigate(TestData.SAUCELAB.login.url),
        await PManager.loginpage.login(TestData.SAUCELAB.login.validcredentials.username,
        TestData.SAUCELAB.login.validcredentials.password)
        await PManager.loginpage.VerifyDashBoardHeading()
        await PManager.inventorypage.addItem('Sauce Labs Backpack')
        await PManager.BrowserPage.waitForTimeout(3000)
        await PManager.inventorypage.checkIteminCart('Sauce Labs Backpack');
        await PManager.BrowserPage.waitForTimeout(3000)
        await PManager.inventorypage.RemoveItemFromCart('Sauce Labs Backpack')
       
    })

})