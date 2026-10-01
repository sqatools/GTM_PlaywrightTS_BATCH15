import {InventoryLocatorPage} from './inventrypagelocators.ts'
import {Page, expect} from '@playwright/test'

export class InventoryPage extends InventoryLocatorPage {
    constructor(page:Page) {
        super(page)
    }

    async AddItemToCart(itemname: string) {
       await this.AddToCartButton(itemname).click() 
    }

    async checkItemInCart(itemname: string) {
        await this.CartLink.click()
        await expect(this.ItemInCart(itemname)).toBeVisible()
        
    }

    async RemoveItemFromCart(itemname: string) {
        await this.RemoveButtonInCart(itemname).click()
        
    }

};