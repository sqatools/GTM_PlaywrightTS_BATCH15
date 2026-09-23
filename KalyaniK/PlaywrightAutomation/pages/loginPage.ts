import { Page, Locator, expect } from '@playwright/test';

export class loginPage {
    
    readonly page:Page
    readonly usernamelocator : Locator
    readonly passwdlocator : Locator
    readonly loginbutton : Locator
 
    constructor(page:Page)
    {
        this.page=page
        this.usernamelocator=this.page.locator("#user-name");
        this.passwdlocator=this.page.getByPlaceholder("Password");
        this.loginbutton=this.page.locator("#login-button");
    } 
   
    async launchurl(url:string){
        await this.page.goto(url);
    }
    async Enterusername(username:string){
        await this.usernamelocator.fill(username)
    }

    async Enterpassword(password:string){
        await this.passwdlocator.fill(password)
    }

    async Loginclick()
    {
        await this.loginbutton.click();
    }
}




     