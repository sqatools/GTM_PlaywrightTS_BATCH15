import {Page} from '@playwright/test'
import {LoginPage} from '../saucedemo/LoginPages.ts'

export class PageManager{
    page: Page
    loginPage : LoginPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)   // this.page because we want to pass the same browser page to the LoginPage class
    }
}