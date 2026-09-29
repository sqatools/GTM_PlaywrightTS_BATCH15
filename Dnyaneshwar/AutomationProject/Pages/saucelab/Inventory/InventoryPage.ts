import { inventoryPageLocator } from "./InventoryPageLocator.ts";
import {expect, Page} from '@playwright/test'

export class InventoryPage extends inventoryPageLocator{


    constructor (page:Page)
    {
        super(page)
    }

    async addItemInCart(itemname:string)
    {
        await this.AddToCartButton(itemname).click();
    }

    async CheckItemInCart(itemname:string)
    {
       await this.cartlink.click()
       await expect(this.ItemInCart(itemname)).toBeVisible()
    }

    async RemoveItemFromCart(itemname:string)
    {
       await this.RemoveButtonInCart(itemname).click();
        
    }

}