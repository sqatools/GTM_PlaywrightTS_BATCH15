import { Page } from "@playwright/test";
import { basepage } from "../../common/basepage.ts";

export class loginpagelocators extends basepage{

    constructor(page: Page){
        super(page)

    }
    get UsernameField(){
        return this.page.getByPlaceholder("Username")
    }
    get PasswordField(){
        return this.page.getByPlaceholder("Password")
    }
    get loginButton(){
        return this.page.getByPlaceholder("#login-button")
    }
    get DashboardHeading(){
        return this.page.locator(".app_logo")
    }
}