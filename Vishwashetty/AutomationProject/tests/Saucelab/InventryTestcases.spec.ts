import {test} from '../../fixtures/BaseFixture.ts'
import * as TestData from '../../testdata/testdata.json'

test.describe("Inventory test cases", ()=> {
    test("Automate inventory page to item and remove item from cart", async({PManager})=> {
        await PManager.loginpage.navigate(TestData.saucelab.url)
        await PManager.loginpage.login(
            TestData.saucelab.username,
            TestData.saucelab.password
        )
        await PManager.loginpage.verifydashboardheading()
       await PManager.InventPage.AddItemToCart(TestData.saucelab.itemname)
       await PManager.InventPage.checkItemInCart(TestData.saucelab.itemname)
       await PManager.InventPage.RemoveItemFromCart(TestData.saucelab.itemname)

    });
});