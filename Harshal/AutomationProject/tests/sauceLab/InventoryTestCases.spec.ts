import {test} from '../../fixtures/baseFixture.ts'
import { PageManager } from '../../pages/common/PageManager.ts'
import * as TestData from '../../testdata/testdata.ts'

test.describe("Work on inventory items :", ()=> {
    test("get all items", async({PManager})=> {     
      await PManager.loginpage.navigate(TestData.SauceLab.login.url)
              await PManager.loginpage.login(
                  TestData.SauceLab.login.validcred.username,
                  TestData.SauceLab.login.validcred.password
              )              
              await PManager.page.waitForTimeout(3_000)
      await PManager.inventorypage.ViewallItems()
      await PManager.page.waitForTimeout(3_000)
    })

    test("Place the order", async({PManager})=>{
         await PManager.loginpage.navigate(TestData.SauceLab.login.url)
              await PManager.loginpage.login(
                  TestData.SauceLab.login.validcred.username,
                  TestData.SauceLab.login.validcred.password
              )
              await PManager.page.waitForTimeout(3_000)
              await PManager.inventorypage.GetOneItem()
              await PManager.inventorypage.ClickAddToCart(TestData.SauceLab.login.itemlist.item3)
              await PManager.inventorypage.clickGoToCart()
              await PManager.inventorypage.Clickcheckout()
              await PManager.inventorypage.EnterFirstName()
              await PManager.inventorypage.EnterLastName()
              await PManager.inventorypage.EnterPostalCOde()
              await PManager.inventorypage.clickcontinue()
              await PManager.inventorypage.clickfinish()
              await PManager.page.waitForTimeout(3_000)

     })

     test("Add to cart using items in test data file", async({PManager})=>{
         await PManager.loginpage.navigate(TestData.SauceLab.login.url)
              await PManager.loginpage.login(
                  TestData.SauceLab.login.validcred.username,
                  TestData.SauceLab.login.validcred.password
              )              
               await PManager.page.waitForTimeout(3_000)
               const items = TestData.SauceLab.login.itemlist;
                 for (const item of Object.values(items)) {
               await PManager.inventorypage.ClickAddToCart(item);
    }
              await PManager.page.waitForTimeout(3_000)

     })


     })




