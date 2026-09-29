import { Page } from "@playwright/test";

import { LoginPage } from "../saucelab/Login/LoginPage";

import{InventoryPage}from '../saucelab/Inventory/InventoryPage'

export class PageManager {

    readonly page:Page
    readonly loginpage:LoginPage
    readonly invenPage:InventoryPage;
    constructor (page:Page)
    {
        this.page=page
        this.loginpage=new  LoginPage(page)
        this.invenPage=new InventoryPage(page)
    }

    // async VerifyDashBoardHeading()
    // {
    //     await this.VerifyDashBoardHeading.
    // }
}