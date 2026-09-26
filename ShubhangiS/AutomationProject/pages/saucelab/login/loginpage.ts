import { loginpagelocators } from "./loginpagelocators";
import { Page } from "@playwright/test";

export class loginpage extends loginpagelocators{

    constructor(page:Page){

        super(page)
    }

    async login(username:string,password:string){

        await this.UsernameField.fill(username)
        await this.PasswordField.fill(password)
    }
}