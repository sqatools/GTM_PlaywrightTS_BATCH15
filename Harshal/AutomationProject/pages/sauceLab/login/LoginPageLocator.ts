import { Page } from "@playwright/test";
import {BasePage} from "../../common/BasePage";

export class loginPageLocator extends BasePage{

      constructor(page: Page){

        super(page)
      }


      get firstUserNameField(){

              return this.page.getByPlaceholder("Username")
      }

       get firstPasswordField(){

              return this.page.getByPlaceholder("Password")
      }

      get loginButton(){

               return this.page.getByRole('button', { name: 'Login' })
      }
  
      get DashboadingHeading() {
        return this.page.locator(".app_logo")
    }


}