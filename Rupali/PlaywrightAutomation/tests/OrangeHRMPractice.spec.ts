import {test} from '@playwright/test'

test.describe("Orange HRMs-add users",async()=>{
    test("Login to Orange HRM ",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type='submit']").click();
   
     await page.locator("//span[text() ='Admin']").click()
     await page.waitForTimeout(3000)
   
     await page.getByRole('button',({name:'Add' })).click()

  //  await page.locator("(//div[@class ='oxd-select-text-input'])[1]").click()
    
    
   await page.locator('.oxd-select-text-input').nth(0).click();
   await page.getByText('Admin', { exact: true }).click();

   // await page.getByPlaceholder("Type for hints...").fill("Rahul")




    })
   
})