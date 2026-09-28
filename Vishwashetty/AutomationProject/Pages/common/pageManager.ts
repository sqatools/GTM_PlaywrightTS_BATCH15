import {Page} from '@playwright/test'
import{LoginPage} from '../saucelab/login/loginpage'

export class PageManager {
    readonly page: Page
    readonly loginPage: LoginPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
    }
}