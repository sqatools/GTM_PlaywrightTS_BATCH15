import {test} from '@playwright/test';

test("enter personal details dummy website", async ({page}) => {    
    //async says: "This method contains operations that may take time."
    //await says: "Wait for this operation to finish before continuing to the next line."
    // page will be the parameter , page is nothing but the browser page which will be opened by playwright 
   // goto : method help us to launch URl

     await page.goto("https://sqatools.in/dummy-booking-website/")

     // Locator : to locate the element we use this method
     //nth : indexing

     await page.locator("#firstname").nth(0).fill("Harish")
     await page.locator("#firstname").nth(1).fill("Deshpande")
     await page.locator("#male").check()

});

test("enter from and destinationcity", async ({page}) => {    
     await page.goto("https://sqatools.in/dummy-booking-website/")

     await page.locator("#fromcity").fill("Hyderabad")
     await page.locator("#destcity").fill("Mumbai")

});
