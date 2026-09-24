import {test, expect} from '@playwright/test'

test.describe("Playwright Locators Methods", ()=> {

    test("getByRole Method", async({page})=> {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.getByRole("textbox", {name: "username"}).fill("Admin")

        await page.getByRole("textbox",{name: "password"}).fill("admin123")

        await page.getByRole("button",{name: " Login "}).click()

        await page.getByRole("link",{name: "Admin"}).click()

        await page.getByRole("button",{name:" Add "}).click()            
       

        const userrole = page .locator(".oxd-form-row") .filter({ hasText: "User Role" }) .locator(".oxd-select-text") .first(); 
        await userrole.scrollIntoViewIfNeeded(); 
        await userrole.click(); 
        await page .locator(".oxd-select-option") .filter({ hasText: "Admin" }) .click(); 
        //await page.waitForTimeout(30000);

        const status = page .locator(".oxd-form-row") .filter({ hasText: "Status" }) .locator(".oxd-select-text") .last(); 
        await status.scrollIntoViewIfNeeded(); 
        await status.click(); 
        await page .locator(".oxd-select-option") .filter({ hasText: "Enabled" }).first().click();
        
        await page.waitForTimeout(3000);

           const password = page
    .locator(".user-password-cell")
    .filter({ hasText: "Password" })
    .locator('input[type="password"]');

        await password.fill("Welcome@123");

        await expect(password).toHaveValue("Welcome@123");

         //await expect(password).toHaveValue("Welcome@123");

         

         const conf_password = page.locator(".oxd-grid-item--gutters").nth(5).filter({hasText:"Confirm Password"}).locator('//input[@type="password"]');
         console.log(conf_password)
         await conf_password.fill("Welcome@123");



         const username = page.locator(".oxd-input-field-bottom-space").nth(3).filter({hasText:"Username"}).locator('//input[@class="oxd-input oxd-input--active"]')
         await username.fill("harshal.ghotekar113@gmail.com")

                

       const Emp_Name = await page.getByPlaceholder("Type for hints...").fill("Tes")
      
       await page.waitForTimeout(5_000)
       await page.keyboard.press("ArrowDown")
       await page.keyboard.press("ArrowDown")
       await page.keyboard.press("Enter")
      

       await page.getByRole('button', {name: " Save "}).click();
        


         


        
        



        
    });
        
        



});

   
       

   
