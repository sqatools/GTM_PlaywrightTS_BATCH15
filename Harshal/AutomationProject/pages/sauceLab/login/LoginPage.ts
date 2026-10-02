import { loginPageLocator } from "./LoginPageLocator"
import { Page, expect} from "@playwright/test"

export class LoginPage extends loginPageLocator{
    constructor(page:Page){
        super(page)
    }

async login(username:string, password: string){

    await this.firstUserNameField.fill(username)
    await this.firstPasswordField.fill(password)
    await this.loginButton.click();


}

    async VerifyDashBoardHeading() {
         //await this.DashboadingHeading.waitFor({state: 'visible', timeout: 15_000})
         expect(this.DashboadingHeading).toBeVisible()
    }
}