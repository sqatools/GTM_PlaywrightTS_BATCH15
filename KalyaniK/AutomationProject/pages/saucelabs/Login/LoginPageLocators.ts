import {BasePage} from  '../../common/BasePage.ts'
import {Page} from '@playwright/test'

export class LoginPageLocators extends BasePage{
 
    constructor(page:Page)

    {
        super(page)
    }
   
    get firstUsernameField()
    {
      return this.page.getByPlaceholder("Username");
    }
   get PasswordField()
    {
      return this.page.getByPlaceholder("Password");
    }
    get Loginbutton()
    {
        return this.page.locator("#login-button");
    }
    get DashboardHeading()
    {
        return this.page.locator(".app_logo");
    }
}
