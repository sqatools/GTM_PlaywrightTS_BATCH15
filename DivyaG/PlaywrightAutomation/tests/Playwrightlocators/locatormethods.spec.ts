import {test,expect} from '@playwright/test'

test.describe("Playwright methods",() =>{
    test("getByRole Method", async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const prButton= page.getByRole("button", {name: "Primary Action"})
        //assertion and verify button status
        await expect(prButton).toBeVisible()
        await page.getByRole("textbox", { name: "username" }).fill("Divya")
        await page.getByRole("checkbox", {name: " Accept terms"}).check()
       const menuitem= await page.getByRole("menuitem", {name: "Products"}).textContent()
       console.log(menuitem)
    })

    test("getByText Method", async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const button = page.getByText("Submit Form")
        expect(button).not.toBeDisabled()
    })

     test("getByLabel Method", async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.waitForTimeout(2000)
        await page.getByLabel("Email Address:").fill("user1@gamil.com")
        await page.getByLabel("Password:").fill("test@123")
        await page.getByLabel("Your Age:").fill("30")
        await page.getByLabel("Standard").check()
        await page.getByLabel("Express").check()
        })

        test("getByPlaceholder Method", async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.waitForTimeout(2000)
        await page.getByPlaceholder("Enter your full name").fill("userdivya")
        await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("9089078908")
        })

        test("getByAltText Method", async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByAltText("logo image").isVisible()
        })
    //get by element id
        test("getByTitle Method", async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const textValue= await page.getByTitle("Home page link").textContent()
        console.log(textValue)
        })

        //identify elements by textid
         test("getByTestId Method", async({page}) =>{
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
       console.log(await page.getByTestId("profile-name").textContent())
       console.log(await page.getByTestId("profile-email").textContent())
       console.log(await page.getByTestId("product-price").textContent()) 
})
})
