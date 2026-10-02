import {Page} from '@playwright/test'
import {LoginPage} from "../saucelab/login/loginPage"
import { InventoryPage } from '../saucelab/inventory/inventoryPage';

export class PageManager{
    readonly page:Page
    readonly loginPage: LoginPage;
    readonly InventPage : InventoryPage

    constructor(page:Page){
        this.page= page
        this.loginPage= new LoginPage(page);
        this.InventPage = new InventoryPage(page);
    }
}