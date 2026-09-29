import {test,expect} from '@playwright/test'
test("Leave request",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForLoadState("domcontentloaded")
    await page.getByPlaceholder('Username').fill('Admin'); 
    await page.getByPlaceholder('Password').fill('admin123'); 
    await page.getByRole('button', { name: 'Login' }).click(); 
    // Wait for login to complete
     await page.waitForLoadState('domcontentloaded'); 
    // // Navigate directly to Leave List 
    await page.goto( 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList' ); 
    test.setTimeout(90_000)
    await page.waitForLoadState('domcontentloaded')


    await page.locator('input').nth(0).fill("2026-01-01")
    await page.locator('input').nth(1).fill("2026-12-31")
    await page.locator(".oxd-input-group").filter({hasText:"Show Leave with Status"}).locator(".oxd-select-text").click()
    await page.getByText("Pending Approval",{exact:true}).click()
   
    
})