import {Page} from '@playwright/test'
import { Basepage } from '../Basepage.ts'
export class LPlocators extends Basepage{
    constructor(page:Page){
        super(page);
    }
        get SLUsername(){
          return this.page.locator("#user-name");  
        }
         get SLPassword(){
          return this.page.getByPlaceholder("Password");  
        }
      get SLLoginbtn(){
          return this.page.locator("#login-button");  
        }
         
    }
   

