import {test} from '@playwright/test'

test.describe("Shopping site",()=>{

    test("Shopping",async({page})=>{

      await test.step("Get ITems and Price for 5 products",async()=>{
         await page.goto("https://automationexercise.com/");
         const productPrices= await page.locator(".productinfo.text-center>h2").all();
         const productDescriptions= await page.locator(".productinfo.text-center>p").all();
         for(var i=1;i<=5;i++)
           { 
            console.log("Product Name: ",await productDescriptions[i].textContent());
            console.log("Product Price: ",await productPrices[i].textContent());
         // const Price = await page.locator(`.productinfo.text-center[${i}]>h2`).textContent();
          //console.log(Price)
          //const Item = await page.locator(`products[${i}]>p`).textContent() ;
         // console.log("ITem Name: ",Price);
         // console.log("Price :",Item)
            }
        })
         await test.step("Add 5 products to cart",async()=>{
            const AddTOCart= await page.locator(".productinfo.text-center>a").all();
            for(var i=0;i<5;i++)
              {
                 await AddTOCart[i].click();
                 if(i<4){
                       await page.locator(".btn.btn-success.close-modal.btn-block").click();
                      //await page.waitForTimeout(2000);
                        //await page.locator("#cartModal").waitFor({state: "hidden"});
                       }
                 if(i==4){
                       await page.getByRole("link",{ name:"View Cart" }).click();

                        }
             }
          })

         await test.step("Checkout and register",async()=>{
          //  await page.waitForTimeout(10000);
            //await page.getByRole("link",{name:"Proceed To Checkout"}).click();
            await page.locator("//a[text()='Proceed To Checkout']").click();///
          //  await page.waitForTimeout(20000);
            await page.getByText('Register / Login').nth(1).click();
          //  await page.waitForTimeout(10000);
            await page.getByRole("textbox", { name:"name"} ).fill("kalyani");
            await page.getByRole("textbox", { name:"email" }).nth(1).fill("dummmy2425@gmail.com");
            await page.getByRole("button", { name:"Signup" }).click();
         })     
    })
})

