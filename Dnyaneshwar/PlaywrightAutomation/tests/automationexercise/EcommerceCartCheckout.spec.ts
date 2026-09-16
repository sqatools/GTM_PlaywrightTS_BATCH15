import {expect, test}from '@playwright/test'
import console from 'node:console';

test.describe("Ecommerce Cart Check Out",async()=>{

    test("Launch Url and add Product to cart",async({page})=>{

        await page.goto("https://www.qapractice.com/practice-ecommerece-website")

        await page.getByRole("button",{name:'Beauty'}).click();

        const productName= await page.getByTestId("view-product-17").textContent();

        console.log("Beauty Product to add on cart is :- ",productName)

        await page.getByTestId("add-to-cart-17").click();

        await page.getByTestId("add-to-cart-17").click();
        await page.getByTestId("add-to-cart-17").click();

        await page.getByTestId("ecom-cart-button").click();

        const ListItems= await page.locator(".list-group-item").textContent();

        console.log(ListItems)

        const CartText= await page.locator(".list-group-item").innerText();

        const text= CartText.split("remove")[0].trim()
        console.log(text)

        await page.getByTestId("ecom-proceed-to-buy").click();

        await page.locator("#ecom-address-name").fill("Danyaneshwar Dandale")

        await page.getByTestId("ecom-address-street").fill("mumbai")

        await page.getByTestId("ecom-address-city").fill("mimbai")

        await page.getByTestId("ecom-address-state").fill("maharastra")

        await page.getByTestId("ecom-address-zip").fill("443255")

        await page.getByRole("button",{name:'Save Address & Continue to Payment'}).click();

        await page.getByTestId("ecom-card-number").fill("1120154587896536")

        await page.getByPlaceholder("MM/YY").fill("10/28")

        await page.getByTestId("ecom-cvv").fill("266")

        await page.getByTestId("ecom-buy-now").click();

       const OrderConfirm= await page.getByRole("heading",{name:'Order Successful!'}).textContent()

       console.log(OrderConfirm)

       await expect(OrderConfirm).toEqual("Order Successful!")

         
    })

    test("Multiple different products",async({page})=>{

         await page.goto("https://www.qapractice.com/practice-ecommerece-website")

         await page.getByTestId("add-to-cart-7").click();

         await page.getByTestId("add-to-cart-4").click();

         await page.getByTestId("ecom-cart-button").click();

         const CartProduct=await page.locator(".offcanvas-body div.list-group-flush").textContent();

         console.log(CartProduct)

         await expect(CartProduct).toEqual("Coca Cola 250ml - $1 x 1RemoveHeadphones Noise Cancelling - $150 x 1Remove")

         console.log("Remove Coca Cola ")

       await page.getByTestId("remove-from-cart-7").click();

       const CartProduct1=await page.locator(".offcanvas-body div.list-group-flush").textContent();

         console.log(CartProduct1)

         await page.getByRole("button",{name:'Proceed to Buy'}).click();

         

        await page.locator("#ecom-address-name").fill("Danyaneshwar Dandale")

        await page.getByTestId("ecom-address-street").fill("mumbai")

        await page.getByTestId("ecom-address-city").fill("mimbai")

        await page.getByTestId("ecom-address-state").fill("maharastra")

        await page.getByTestId("ecom-address-zip").fill("443255")

        await page.getByRole("button",{name:'Save Address & Continue to Payment'}).click();

        await page.getByTestId("ecom-card-number").fill("1120154587896536")

        await page.getByPlaceholder("MM/YY").fill("10/28")

        await page.getByTestId("ecom-cvv").fill("266")

        await page.getByTestId("ecom-buy-now").click();

       const OrderCnftxt= await page.getByRole("heading",{name:'Order Successful!'}).textContent();

       console.log(OrderCnftxt)

       const ConfirmPageProduct=await page.locator(".list-group-item").textContent();

       console.log(ConfirmPageProduct)

    })

    test("Validate checkout with empty mandatory fields",async({page})=>{

        await page.goto("https://www.qapractice.com/practice-ecommerece-website")

        await page.getByTestId("add-to-cart-6").click();

        await page.locator(".btn-outline-primary").click();

        await page.getByRole("button",{name:'Proceed to Buy'}).click();

        await page.getByTestId("ecom-address-street").fill("Mumbai")

        await page.getByTestId("ecom-address-city").fill("mumbai")

        await page.getByTestId("ecom-address-state").fill("Maharastra")

        await page.getByTestId("ecom-address-zip").fill("21212")

        const Continue_To_Payment= await page.getByRole("button",{name:'Save Address & Continue to Payment'})

       await expect(Continue_To_Payment).toBeEnabled();
       await Continue_To_Payment.click();

    })

})
