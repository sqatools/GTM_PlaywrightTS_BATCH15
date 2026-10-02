import {test} from '../../fixture/baseFixture'
import * as TestData from '../../testdata/testdata.json'

test.describe("INvemtory Test cases", () =>{
    test("Automate Inventory Page to item and remove item from cart", async({Pmanager}) => {

        await Pmanager.loginPage.navigate(TestData.saucelab.url)
        await Pmanager.loginPage.login(
            TestData.saucelab.username,
            TestData.saucelab.password
        )
await Pmanager.InventPage.AddItemToCart(TestData.saucelab.itemname)

await Pmanager.InventPage.CheckItemInCart(TestData.saucelab.itemname)

await Pmanager.InventPage.RemoveItemFromCart(TestData.saucelab.itemname)
    })
})