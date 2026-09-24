import {test} from '@playwright/test'

test.describe("orangeHRM ",()=>{

   test("OrangeHRM",async({page})=>{
    await test.setTimeout(60_000)
    await test.step("login to HRM",async({})=>{
      
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByRole("textbox",{name:"username"}).fill("Admin");
       // await page.setViewportSize({width:2000,height:1080})
          
        await page.getByRole("textbox",{name:"password"}).fill("admin123");
        await page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click();

     })
     await test.step("Add Role",async({})=>{
        // await page.setViewportSize({width:2000,height:1080})
         await page.locator("//span[text()='Admin']").click();
         await page.getByRole("button",{name:"Add"}).click();

          await page.locator(".oxd-select-text-input").nth(0).click();
         //await selectRole.selectOption("Admin")
       
          //await selectstatus.selectOption("Enabled")

          
         
            await page.getByRole("option", {name: "Admin", exact: true}).click();
            await page.locator(".oxd-select-text-input").nth(1).click();
            await page.getByRole("option", {name: "Enabled", exact: true}).click();
            await page.getByPlaceholder("Type for hints...").fill("k")
            await page.waitForTimeout(3000);
            //await page.getByRole("listbox").filter({hasText: "Akash Kumar Gupta"}).click();
           await page.locator("//div[@role='listbox']/div").nth(0).click();
           await page.locator(".oxd-input.oxd-input--active").nth(1).fill("KalyaniK2")

            await page.locator("//input[@type='password']").nth(0).fill("MyPasswordNew!1234");
            await page.locator(".oxd-input.oxd-input--active").nth(2).fill("MyPasswordNew!1234")
            await page.getByRole("button",{name:" Save"}).click()  
            await page.waitForTimeout(20000);
        })

      await test.step("edit",async({})=>{
            await page.locator(".oxd-input.oxd-input--active").nth(1).fill("KalyaniK2")
            await page.locator("//div[@role='listbox']/div").nth(1).click();

            const TableRow=await page.locator("//div[@class='oxd-table-card']").nth(8);
            
            const TableCell=await page.locator("//div[@class='oxd-table-cell oxd-padding-cell']").nth(2);
            
            //TableRow.filter({has:TableCell}).filter({hasText:"confidence"}).fill("confidence1")
      })
     })
   })

   




    
