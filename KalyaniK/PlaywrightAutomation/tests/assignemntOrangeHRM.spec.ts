import {test} from '@playwright/test'

test.describe("orangeHRM ",()=>{

   test("OrangeHRM",async({page})=>{

     test.step("login to HRM",async({})=>{
      
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByRole("input",{name:"username"}).fill("Admin");
        await page.getByRole("input",{name:"password"}).fill("admin123");
        await page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button");

     })
   })

   




    
})