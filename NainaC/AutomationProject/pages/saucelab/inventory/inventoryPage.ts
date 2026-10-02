import {Page,expect} from '@playwright/test'
import {InventoryPageLoactor} from './inventoryPageLocator';

export class InventoryPage extends InventoryPageLoactor {
constructor(page:Page){
    super(page)
}

async AddItemToCart(itemname: string){
   await this.AddToCartButton(itemname).click()
}

async CheckItemInCart(itemname: string){
  await  this.CartLink.click()
   await expect(this.ItemInCart(itemname)).toBeVisible()
}

async RemoveItemFromCart(itemname: string){
  await  this.RemoveButtonInCart(itemname).click()

    
}
}