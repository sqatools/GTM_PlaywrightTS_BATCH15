import {test} from '@playwright/test'

test.describe("Ecommerce site scenarios",()=>{
    test("get prices of each product", async({page})=>{
        await page.goto("https://automationexercise.com/");
        const productName = await page.locator("//div[@class='product-image-wrapper']/following::p[text()='Blue Top']").textContent()
        console.log(productName)
        const ProductPrice = await page.locator("//div[@class='product-image-wrapper']/following::p[text()='Blue Top']/following::h2").textContent()
        console.log(ProductPrice)   
    })
})