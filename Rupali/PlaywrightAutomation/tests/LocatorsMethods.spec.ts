/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import {test, expect} from '@playwright/test'

test.describe("Playwright Locators Methods", ()=> {

    test("getByRole Method", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const Prbutton = page.getByRole("button", {name: "Primary Action"})
        // assertion and verify button status.
        await expect(Prbutton).toBeVisible()

        await page.getByRole("textbox", {name: "Username:"}).fill("Rahul")
        await page.getByRole("checkbox", {name: "Accept terms"}).check()

        const menuitem = await page.getByRole("menuitem", {name: "Products"}).textContent()
        console.log(menuitem)

    });

    test("getByText Method", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const button = page.getByText("Submit Form")
        expect(button).not.toBeDisabled()
       
    });

    test("getByLabel() Method", async({page})=> {
        //<label for="email">Email Address:</label>
        // we can user getByLabel method when label is tagname or it could be attrribute ass well
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByLabel("Email Address:").fill("user1@gmail.com")
        await page.getByLabel("Password: ").fill("test@12345")
        await page.getByLabel("Your Age:").fill("34")
        await page.getByLabel("Standard").click()

    });


})

test("getByplaceholder",async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
  await page.getByPlaceholder("Enter your full name").fill("rahul sharma")
  await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("99-22-3344556")
  await page.getByPlaceholder("Type your message here...").fill("I am writing message here to continue the practice of xpath");
  await page.getByPlaceholder("Search products...").fill("shoes")
})