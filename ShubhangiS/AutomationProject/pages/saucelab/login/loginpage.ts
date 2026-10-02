import { loginpagelocators } from "./loginpagelocators";

import {Page, expect} from '@playwright/test'
export class LoginPage extends loginpagelocators{

    constructor(page:Page){

        super(page)
    }

    async login(username:string,password:string){

        await this.UsernameField.fill(username)
        await this.PasswordField.fill(password)
         await this.loginButton.click()
    }

    async VerifyDashBoardHeading() {
        //await this.DashboadingHeading.waitFor({state: 'visible', timeout: 15_000})
        await expect(this.DashboardHeading).toBeVisible()
    }
}


