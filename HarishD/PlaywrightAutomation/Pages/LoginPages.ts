
import { Locator, Page, expect } from '@playwright/test'

export class LoginPage {

    readonly page:Page
    readonly UsernameFiled: Locator
    readonly PasswordFiled: Locator
    readonly LoginButton: Locator
    readonly DashBoard: Locator


    constructor(page: Page) {
        this.page=page
        this.UsernameFiled = this.page.getByPlaceholder("Username")
        this.PasswordFiled=this.page.getByPlaceholder("Password")
        this.LoginButton = this.page.getByRole('button', { name: 'Login' })
        this.DashBoard = this.page.locator('.app_logo')
    }

     async enterUserName(username :string){
     await this.UsernameFiled.fill(username)
     }

     async enterpasswordName(password :string){
     await this.PasswordFiled.fill(password)
     }

     async clickLoginButton(){
     await this.LoginButton.click()
     }

     async VerifyDashboardHeading(){
     await expect(this.DashBoard).toBeVisible()
     }
     
     async gotoLoginPage(url :string)
     {
       await  this.page.goto(url)
     }
    async login(user: string, pass: string) {
        await this.enterUserName(user)
        await this.enterpasswordName(pass)
        await this.clickLoginButton()
    }

}

