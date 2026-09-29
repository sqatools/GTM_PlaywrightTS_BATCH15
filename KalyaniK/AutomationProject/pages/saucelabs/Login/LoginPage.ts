import {LoginPageLocators} from './LoginPageLocators.ts'
import {Page} from '@playwright/test'

class LoginPage extends LoginPageLocators{
    constructor(page:Page)
        {
            super(page)
        }

        async login(username:string,password:string)
        {
            await this.firstUsernameField.fill(username)
            await this.PasswordField.fill(password)
            await this.Loginbutton.click()
        }
}