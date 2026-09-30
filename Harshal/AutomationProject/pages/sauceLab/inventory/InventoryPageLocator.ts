import { Page } from "@playwright/test";
import {BasePage} from "../../common/BasePage";

export class InventoryPageLocator extends BasePage{

      constructor(page: Page){

        super(page)
      }
get allitems() {
    return this.page.locator('[data-test="inventory-item"]');
}
get allnamesofitems() {
    return this.page.locator('[data-test="inventory-item-name"]');
}       
get Getspecificitem() {
    return this.page
        .locator("div[class='inventory_item']")
        .filter({ hasText: "Sauce Labs Backpack" });
}
getItem(itemName: string) {
    return this.page
        .locator("div.inventory_item")
        .filter({ hasText: itemName});
}
    get Addtocart() {
        return this.page.getByRole("button", { name: "Add to cart" });
}
get GotoCart(){
    return this.page.locator(".shopping_cart_link");
}

get CheckOut(){

    return this.page.getByRole("button", {name: "Checkout"})

 }

 get firstName(){

     return this.page.locator("#first-name")

 }
 get lastname(){
    return this.page.locator("#last-name")

 }
 get postalcode(){

    return this.page.locator("#postal-code")

 }
 get finish(){

    return this.page.getByRole("button", {name: "Finish"})

 }
 get Continue(){

    return this.page.getByRole("button", {name: "Continue"})

 }

}