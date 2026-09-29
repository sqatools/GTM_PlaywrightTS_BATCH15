import {Page}from '@playwright/test'

import { BasePage } from '../../common/BasePage'

export class inventoryPageLocator extends BasePage {

    constructor(page:Page)
    {
        super(page)
    }

    AddToCartButton(itemname: string) {
    return this.page
        .locator(".inventory_item")
        .filter({ hasText: itemname })
        .getByRole("button", { name: "Add to cart" });
}

      RemoveButton(itemname:string)
    {

        return this.page.locator(".inventory_item").filter({hasText:'itemname'}).getByRole("button",{name:'Remove'})

    }
    get cartlink()
    {
        return this.page.locator(".shopping_cart_link")
    }

    // ItemInCart(itemname :string)
    // {
    //     return this.page.locator(".inventory_item_name").filter({hasNotText:itemname})
    // }
    ItemInCart(itemname: string) {
    return this.page
        .locator(".inventory_item_name")
        .filter({ hasText: itemname });
}

    RemoveButtonInCart(itemname: string) {
    return this.page
        .locator(".cart_item")
        .filter({ hasText: itemname })
        .getByRole("button", { name: "Remove" });
}
}