import {Page} from '@playwright/test'
import {LoginPage} from '../saucelabs/Login/LoginPage'

export class PageManager{
    readonly page:Page
            readonly LoginPage:LoginPage

            constructor(page:Page){
                this.page=page;
                this.LoginPage=new LoginPage(page)
            }
}