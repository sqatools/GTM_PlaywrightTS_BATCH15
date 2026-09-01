import {expect, test} from '@playwright/test'

test("get by lable",async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
   await page.getByLabel("Email Address:").fill("dnyaneshwar121");
   await page.getByLabel("Password").fill("dnyaneshwar121");
   await page.getByLabel("Your Age:").fill("32")
   await page.getByLabel("Standard").click();


   //getByPlaceholder 

   await page.getByPlaceholder("Enter your full name").fill("dnyaneshwar");
   await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("9545291992")
   await page.getByPlaceholder("Type your message here...").fill("hello welcome to playwright automation");
   var button= await page.getByText("Submit Form")
   expect(button).not.toBeDisabled()

//getByTestId 

   console.log(await page.getByTestId("profile-email").textContent());

   console.log(await page.getByTestId("profile-name").textContent());
   console.log(await page.getByTestId("product-card-3").textContent())
   
   console.log(await page.getByTestId("product-grid").textContent())

})

//getByRole

test.only("Get By Roll",async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

var button=await page.getByRole("button",{name:"Primary Action"})
await expect(button).toBeVisible();

await page.getByRole("checkbox",{name:" Accept terms"}).check()

await page.getByRole("textbox",{name:"Username:"}).fill("viraj")

var tbutton=await page.getByRole("button",{name:"Toggle Button"})
expect(tbutton).toBeVisible();

// get by title

var titletext=await page.getByTitle("Home page link").textContent();

console.log(titletext)

var htmltitle= await page.getByTitle("HyperText Markup Language").textContent()
console.log(htmltitle)

var t1= await page.getByTitle("Tooltip text").textContent()
console.log(t1)

var save=await page.getByTitle("Click to save your changes").textContent()

console.log(save)

//getByAltText 

await page.getByAltText("logo image").isVisible();

})