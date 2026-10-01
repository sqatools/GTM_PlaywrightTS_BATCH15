import {Page} from '@playwright/test'
import { BasePage } from '../../common/BasePage.ts'

export class InventoryLocatorPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    AddToCartButton(itemname: string){
        return this.page.locator(".inventory_item").filter({hasText: itemname}).getByRole("button", {name: "Add to cart"})
    }

    RemoveButton(itemname: string){
        return this.page.locator(".inventory_item").filter({hasText: itemname}).getByRole("button", {name: "Remove"})
    }

    get CartLink() {
        return this.page.locator(".shopping_cart_link")
    }

    ItemInCart(itename: string) {
        return this.page.locator(".inventory_item_name").filter({hasText: itename})
    }

    RemoveButtonInCart(itemname: string){
        return this.page.locator(".cart_item").filter({hasText: itemname}).getByRole("button", {name: "Remove"})
    }

} 
