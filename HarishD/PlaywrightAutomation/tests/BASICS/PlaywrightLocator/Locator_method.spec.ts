/* 
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect } from '@playwright/test'

test.describe("Playwright Locators Methods", () => {

    test("getByRole Method", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const Prbutton = page.getByRole("button", { name: "Primary Action" })
        // assertion and verify button status.
        await expect(Prbutton).toBeVisible()

        await page.waitForTimeout(2000)

        const Tbutton = page.getByRole("button", { name: "Toggle Button" })
        // assertion and verify button status.
        await expect(Tbutton).toBeVisible()

        const CheckB = page.getByRole("checkbox", { name: " Accept terms" })
        // assertion and verify button status.
        await expect(CheckB).toBeVisible()
        await page.getByRole("textbox", { name: "Username:" }).fill("Harish Deshpande")
        await page.getByRole("checkbox", { name: "Accept terms" }).check()
        await page.waitForTimeout(2000)
        const menuitem = await page.getByRole("menuitem", { name: "Products" }).textContent()
        console.log(menuitem)

    })

    test("getByText Method", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const startButton = page.getByText("START")
        await expect(startButton).toBeVisible()
        await expect(startButton).toBeEnabled()
        await expect(startButton).toHaveText("START")
        await expect(startButton).toHaveCount(1)
        await expect(startButton).not.toBeDisabled()

    })

    test("getByLabel() Method", async ({ page }) => {
        //<label for="email">Email Address:</label>
        // we can user getByLabel method when label is tagname or it could be attrribute ass well
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

        await page.getByLabel("Email Address:").fill("User133@gmail.com")
        await page.getByLabel(" Password:").fill("abc@123")
        await page.getByLabel("Your Age:").fill('24')
        await page.getByLabel(" Standard").check()
    });


    test("getByPlaceholder method", async ({ page }) => {
        //<input type="text" placeholder="Enter your full name" class="full-width">
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByPlaceholder("Enter your full name").fill("Harish Deshpande")
        await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("1234567890")
        await page.getByPlaceholder("Type your message here...").fill("Lerning PLAYWRGHHT")
        await page.getByPlaceholder("Search products...").fill("Shoes")

    });

    test("getByAltText method", async ({ page }) => {
        //<input type="text" placeholder="Enter your full name" class="full-width">
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByAltText("logo image").isVisible()

    });

    test("getByTitle method", async ({ page }) => {
        //<input type="text" placeholder="Enter your full name" class="full-width">
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html") 

        const textvalue = await page.getByTitle("Home page link").textContent()
        console.log(textvalue)          

        // identiyfy elelmentus test id
        console.log(await page.getByTestId("profile-email").textContent())
        console.log(await page.getByTestId("profile-name").textContent())
        console.log(await page.getByTestId("product-card-2").textContent())
 });

}); 