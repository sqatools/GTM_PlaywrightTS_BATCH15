import{test,expect} from '@playwright/test';

test.describe("playwright automation",()=>{


    test("Get All products",async({page})=>{

        await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");

        await page.locator("#userEmail").fill("ddandale14@gmail.com");

        await page.locator("#userPassword").fill("dandale");    

        await page.getByRole("button",{name:'login'}).click();
              
        const AllProducts = await page.locator("div.row .card").all();
         
        for(const product of AllProducts){
            

            const productName=await product.locator("h5").textContent();
            const productprice=await product.locator("div .card-body div.text-muted").textContent();

            console.log(productName);
            console.log(productprice);

        } 



    })

})
