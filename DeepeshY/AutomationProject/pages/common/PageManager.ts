import {Page} from '@playwright/test'
import { LoginPage } from "../saucelab/login/loginPage.ts";
import { InventoryPage } from '../saucelab/inventory/inventoryPage.ts'

export class PageManager {
    readonly page: Page
    readonly loginpage: LoginPage
    readonly InventPage: InventoryPage

    constructor(page: Page){
        this.page = page
        this.loginpage = new LoginPage(page)
        this.InventPage = new InventoryPage(page)
    }
}