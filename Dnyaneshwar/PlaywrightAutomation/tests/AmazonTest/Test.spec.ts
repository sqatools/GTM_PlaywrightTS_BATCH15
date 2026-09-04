import {test}from '@playwright/test';

test("search product to amazon search bar",async ({page})=>{

    await page.goto("https://www.amazon.in/")

    await page.getByPlaceholder("Search Amazon.in").fill("samsung");

    await page.locator("#sac-suggestion-row-1").first().click();

    //await page.getByRole("button",{name:"Add to cart"}).click({force:true})
    await page.locator("(//input[@name='submit.addToCart'])[1]").click();
    await page.locator("//input[@name='proceedToRetailCheckout']").click();
    await page.locator("#ap_email_login").fill("9545291992");
    await page.locator("//input[@class='a-button-input']").click();

    await page.locator("//a[@id='auth-fpp-link-bottom']").click();

    await page.getByRole("button",{name:'Continue'}).click();

    

})


