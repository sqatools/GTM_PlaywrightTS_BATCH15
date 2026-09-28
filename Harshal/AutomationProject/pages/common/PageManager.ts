import {Page} from '@playwright/test'
import { LoginPage } from '../sauceLab/login/LoginPage'
import { InventoryPage } from '../sauceLab/inventory/InventoryPage'


export class PageManager{

    readonly page: Page
    readonly loginpage: LoginPage
    readonly inventorypage: InventoryPage

    constructor(page: Page){

        this.page = page
        this.loginpage = new LoginPage(page)
        this.inventorypage = new InventoryPage(page)
    }
}

