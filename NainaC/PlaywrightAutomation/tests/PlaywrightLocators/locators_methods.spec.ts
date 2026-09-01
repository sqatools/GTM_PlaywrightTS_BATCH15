import {test, expect} from  '@playwright/test'

test.describe("playwright locator methods", () => {
test("getByRole Methods", async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
const Prbutton = page.getByRole("button", {name: "Primary Action"})
await expect(Prbutton).toBeVisible()


await page.getByRole("textbox", {name: "username:"}).fill("Rahul")
await page.getByRole("checkbox", {name: " Accept terms"}).check()
const menuitem= await page.getByRole("menuitem", {name: "Home"}).textContent()

console.log(menuitem)

});

test("getByText Method", async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
//const button = page.getByText("Submit Form")
const button = page.getByText("button", {name: "Submit Form"});
expect(button).not.toBeDisabled
});


})
