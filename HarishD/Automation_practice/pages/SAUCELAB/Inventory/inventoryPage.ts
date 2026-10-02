//basepage >locator page>page>pagemanager>fixture>testcase
 
import { InventoryLocatorPage }   from './inventoryPageLocators.ts'
import {expect, Page} from '@playwright/test' 

export class  inventorypage extends InventoryLocatorPage{

   constructor(page: Page) {
        super(page)
    } 

    async addItem(Itemname:string){
        await this.addtocartButton(Itemname).click()
    }

     async  checkIteminCart(Itemname:string){
        await this.cartlink.click()

        expect(this.IteminCart(Itemname)).toBeVisible()
    }

    async  RemoveItemFromCart(Itemname:string){
        await this.cartlink.click()

        expect(this.RemooveButtonIncart(Itemname)).toBeVisible()

}

