import { BasePage } from "../../common/BasePage";
import {Page} from '@playwright/test'

export class LoginPageLocator extends BasePage {
constructor(page:Page){
    super(page)
}

get UsernameField(){
    return this.page.getByPlaceholder("Username")
}

get PasswordField(){
    return this.page.getByPlaceholder("Password")
}

get LoginButton(){
    return this.page.locator("#login-button")
}


}