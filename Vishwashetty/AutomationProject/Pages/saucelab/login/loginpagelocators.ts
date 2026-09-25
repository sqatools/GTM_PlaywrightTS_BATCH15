import {Page} from '@playwright/test'
import {BasePage} from "../../common/Basepage";

export class LoginPageLocators extends BasePage {

    constructor(page: Page) {
        super(page);
    }       

    get FirstNameField() {
        return this.page.locator('#first-name');
    }   
    get FirstPasswordField() {
        return this.page.locator('#password');
    }
    get LoginButton() {
        return this.page.locator('#login-button');
    }
    get DashboardHeading() {
        return this.page.locator('.title');
    }
}
