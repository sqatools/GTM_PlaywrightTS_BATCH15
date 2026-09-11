import  { expect, test } from "@playwright/test"  



test.describe("Login to the  HRM browser", async()=>{
    

    test("Login to the browser",async({page})=>{

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const UserName = "admin"

        const password = "admin123"

        const UsernameFiled =page.getByPlaceholder("Username")
        await UsernameFiled.fill(UserName)
        const Entervalue=await UsernameFiled.inputValue()
        console.log("Entered value in username field is : "+Entervalue)
        expect(Entervalue).toEqual(UserName)

        const PasswordFiled =page.getByPlaceholder("Password")
        await PasswordFiled.fill(password)
        const EnterPassword=await PasswordFiled.inputValue()
        console.log("Entered value in password field is : "+EnterPassword)
        expect(EnterPassword).toEqual(password)

        await page.getByRole("button",{name:"Login"}).click()






    })

})