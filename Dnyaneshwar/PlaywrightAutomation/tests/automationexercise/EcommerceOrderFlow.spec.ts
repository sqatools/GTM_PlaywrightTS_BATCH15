import { expect, test } from '@playwright/test'


test.describe("E-commerce Automation Practice", async () => {

    test("LTest Case 1 Launch Url and Add product to Card", async ({ page }) => {

        await page.goto("https://www.qapractice.com/practice-ecommerece-website")

        const LaptopProduct = page.locator(".h-100").filter({hasText: 'Laptop Pro'});

        await LaptopProduct.getByRole("button",{name:'Add to Cart'}).click();

    })

    test("CLick to card and proceed order",async({page})=>{

         await page.goto("https://www.qapractice.com/practice-ecommerece-website")

         const LaptopProduct = page.locator(".h-100").filter({hasText: 'Laptop Pro'});

        await LaptopProduct.getByRole("button",{name:'Add to Cart'}).click();
    
        await page.getByTestId("ecom-cart-button").click();


    })

    test("proceed to buy and complete the order",async({page})=>{

        
         await page.goto("https://www.qapractice.com/practice-ecommerece-website")

         const LaptopProduct = page.locator(".h-100").filter({hasText: 'Laptop Pro'});

        await LaptopProduct.getByRole("button",{name:'Add to Cart'}).click();
    
        await page.getByTestId("ecom-cart-button").click();

        await page.locator("#ecom-proceed-to-buy").click();


    })
test("enetr shipping address details",async({page})=>{


    
         await page.goto("https://www.qapractice.com/practice-ecommerece-website")

         const LaptopProduct = page.locator(".h-100").filter({hasText: 'Laptop Pro'});

        await LaptopProduct.getByRole("button",{name:'Add to Cart'}).click();
    
        await page.getByTestId("ecom-cart-button").click();

        await page.locator("#ecom-proceed-to-buy").click();

        await page.locator("#ecom-address-name").fill("Dnyaneshwar Dandale")

        await page.getByTestId("ecom-address-street").fill("Dadar East mumbai 403256");

        await page.getByTestId("ecom-address-city").fill("mumbai")

        await page.getByTestId("ecom-address-state").fill("maharastra0")

        await page.getByTestId("ecom-address-zip").fill("40659")

        await page.getByRole("button",{name:'Save Address & Continue to Payment'}).click();

            await page.locator("#ecom-card-number").fill("1120326598456257")

            await page.locator("#ecom-expiry").fill("10/28")

            await page.locator("#ecom-cvv").fill("266")

            await page.getByRole("button",{name:'Buy Now'}).click();

           const HeadingText= await page.getByRole("heading",{name:'Order Successful!'}).textContent()

           console.log(HeadingText)

           const textMsg= await page.getByText("Woohoo!! Successfully purchased").textContent();
           console.log(textMsg)

           expect(textMsg).toEqual("Woohoo!! Successfully purchased")


     const splitString=textMsg?.split(" ")[1]
      console.log("split String :- ",splitString)
})


})