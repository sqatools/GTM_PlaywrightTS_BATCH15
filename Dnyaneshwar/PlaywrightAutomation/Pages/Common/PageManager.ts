import { Page } from "@playwright/test";    

import { LoginPage } from "../SauceLabs/LoginPage"; 

export class PageManager{

    page:Page
    LoginPage:LoginPage

    constructor(page:Page)
    {
        this.page=page
        this.LoginPage=new LoginPage(this.page)

    }
}