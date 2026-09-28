import { Page } from '@playwright/test'

import { BasePage } from '../../common/BasePage'

export class loginPageLocator extends BasePage {

    constructor(page: Page) {
           super(page)
       }
   
       get UsernameField() {
           return this.page.getByPlaceholder("Username")
       }
   
       get PasswordField() {
           return this.page.getByPlaceholder("Password")
       }
   
       get loginButton() {
           return this.page.locator("#login-button")
       }
   
       get DashboadingHeading() {
           return this.page.locator(".app_logo")
       }
   }