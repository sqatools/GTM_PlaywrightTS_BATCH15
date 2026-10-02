import { Page } from '@playwright/test'

import { BasePage } from '../../common/BasePage'

export class InventoryLocatorPage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    addtocartButton(Itemname: string) {
        return this.BrowserPage.locator('.inventory_item').filter({ hasText: Itemname }).getByRole('button', { name: 'Add to cart' })
    }

    remooveButton(Itemname: string) {
        return this.BrowserPage.locator('.inventory_item').filter({ hasText: Itemname }).getByRole('button', { name: 'Remove' })
    }

    get cartlink() {
        return this.BrowserPage.locator('.shopping_cart_link')
    }

    IteminCart(Itemname: string) {
        return this.BrowserPage.locator('.inventory_item_name').filter({ hasText: Itemname })
    }
    RemooveButtonIncart(Itemname: string) {
        return this.BrowserPage.locator('.cart_item').filter({ hasText: Itemname }).getByRole('button', { name: 'Remove' })
    }

}