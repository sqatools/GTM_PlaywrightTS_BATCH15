import { Page } from '@playwright/test'
import { Loginpage } from '../SAUCELAB/Login/loginPage.ts'
import { InventoryPage }  from  '../SAUCELAB/Inventory/inventoryPage.ts'



export class pagemanager {

    readonly BrowserPage: Page
    readonly loginpage: Loginpage
    readonly  inventorypage :InventoryPage

    constructor(page: Page) {
        this.BrowserPage = page
/*In Page Manager, we import the LoginPage class and create its object using new Loginpage(page).
 We store this object in the Page Manager. Then, in our test file, we can access the LoginPage and
 its methods through the Page Manager object."   if we create other pages also we will follow same process*/
        this.loginpage = new Loginpage(page)
        this.inventorypage= new InventoryPage(page)
    }

}








