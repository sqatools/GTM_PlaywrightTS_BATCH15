import {Page} from '@playwright/test'
import {LoginPage} from '../saucelab/LoginPage.ts'

export class PageManager{
    page: Page
    loginPage : LoginPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
    }
}