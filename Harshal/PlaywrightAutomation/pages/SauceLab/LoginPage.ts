// import { Page, Locator, expect } from '@playwright/test';

// export class LoginPage {

//     readonly page: Page;
//     readonly username: Locator;
//     readonly password: Locator;
//     readonly loginBtn: Locator;
    

//     constructor(page: Page) {
//         this.page = page;

//         this.username = page.getByPlaceholder("Username");
//         this.password = page.getByPlaceholder('#Password');
//         this.loginBtn = page.getByRole("button", {name:'login-button'});
        
//     }

//     async gotoLoginPage(url:string) 
//     {
//         await this.page.goto(url);
//     }

//     async enterUsername(user: string) {
//         await this.username.fill(user);
//     }

//     async enterPassword(pass: string) {
//         await this.password.fill(pass);
//     }

//     async clickLogin() {
//         await this.loginBtn.click();
//     }

//     async login(user: string, pass: string) {
//         await this.enterUsername(user);
//         await this.enterPassword(pass);
//         await this.clickLogin();
//     }

    
    
// }