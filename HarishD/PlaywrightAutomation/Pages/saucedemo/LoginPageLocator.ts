import { Locator, Page, } from "@playwright/test";

import { BasePage } from '../Common/BasePage.ts'

export class LoginPageLocators extends BasePage {
          
    constructor(page: Page) {
        super(page)
    }
    // when ever we are uing get method use the return statement
    get UsernameFiled() {

        return this.BrowserPage.getByPlaceholder('Username')
    }

    get PasswordFiled() {

        return this.BrowserPage.getByPlaceholder('Password')

    }

    get LoginButton() {

        return this.BrowserPage.getByRole('button', { name: 'Login' })

    }

    get DashBoard() {

        return this.BrowserPage.locator('.app_logo')

    }


}