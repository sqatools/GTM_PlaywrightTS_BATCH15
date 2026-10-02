import { Page } from '@playwright/test'
import { BasePage } from '../../common/BasePage.ts'

export class loginpagelocator extends BasePage {

    constructor(page: Page) {
        super(page)
    } 

    //Not always. get does not automatically mean you must use return, but in your Playwright example, you use return because you want the getter to give back a locator.
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

