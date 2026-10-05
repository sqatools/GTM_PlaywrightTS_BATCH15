import { Page } from "@playwright/test";
import {LoginPageLocator} from './Login_pageLocator' 

export class LoginPage extends LoginPageLocator {
    //readonly page: Page
    constructor(page:Page){
        super(page)
    }

async login(username: string, password:string){
    await this.UsernameField.fill(username)
    await this.PasswordField.fill(password)
    await this.LoginButton.click()
}
}