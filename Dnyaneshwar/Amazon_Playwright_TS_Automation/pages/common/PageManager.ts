import { Page } from "@playwright/test";
import { LoginPage } from "../amazon/login/loginPage";
import { HomePage } from "../amazon/home/homePage";

export class PageManager {

    readonly page:Page
    readonly LoginPage:LoginPage
    readonly HomePage:HomePage

    constructor(page:Page)
    {
        this.page=page
        this.LoginPage=new LoginPage(page)
        this.HomePage=new HomePage(page)
    }

}