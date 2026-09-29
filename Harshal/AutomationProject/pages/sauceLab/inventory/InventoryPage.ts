import { InventoryPageLocator } from "./InventoryPageLocator"
import { Page, expect } from "@playwright/test"



export class InventoryPage extends InventoryPageLocator{
    constructor(page:Page){
        super(page)
    }

async ViewallItems() {

    const count = await this.allnamesofitems.count();

    console.log("Total Items:", count);

    for (let i = 0; i < count; i++) {

        const itemName = await this.allnamesofitems.nth(i).innerText();

        console.log(itemName);
    }
}

async GetOneItem(){
    await expect(this.Getspecificitem).toBeVisible()
    
}

async ClickAddToCart(itemName:string){
      await this.getItem(itemName)
        .getByRole("button", { name: "Add to cart" })
        .click();
      
            
}

async clickGoToCart(){
    await this.GotoCart.click()
}
async Clickcheckout(){
    await this.CheckOut.click()
}

async EnterFirstName(){
    await this.firstName.fill("Harshal")
}

async EnterLastName(){
    await this.lastname.fill("Ghotekar")
}

async EnterPostalCOde(){
    await this.postalcode.fill("123456")
}

async clickcontinue(){
    await this.Continue.click()
}


async clickfinish(){
    await this.finish.click()
}


}
