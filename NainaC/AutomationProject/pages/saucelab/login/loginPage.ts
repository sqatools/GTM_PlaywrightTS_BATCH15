import {loginPageLocator} from "./loginPageLocator";
import {Page,expect} from '@playwright/test'

export class LoginPage extends loginPageLocator{
   constructor(page:Page){
    super(page)
   }

   async login(username: string, password :string){
    await this.firstNameField.fill(username)
   await  this.firstPasswordField.fill(password)
   await  this.loginButton.click()
   }
   async verifyDashboardHeading(){
 // await  this.DashboardHeading.waitFor({state: 'visible', timeout: 15_000})
     expect(this.DashboardHeading).toBeVisible()
   }
}
