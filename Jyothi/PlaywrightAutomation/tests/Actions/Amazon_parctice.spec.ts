import {test,expect} from '@playwright/test'
test("Add to cart items",async({page})=>
{
    await page.goto("https://www.amazon.com/")
    test.setTimeout(80_000)
    await page.locator("#twotabsearchtextbox").fill("laptop")
    await page.locator("#nav-search-submit-button").click()
    const products= page.locator('[data-component-type="s-search-result"]')
    await page.waitForSelector('[data-component-type="s-search-result"]')
    const count=await products.count()
    console.log("Total products:",count)
    for(var i=0;i<count;i++)
    {
        const productname=await products.nth(i).locator("h2 span").innerText().catch(()=>"Name not available")
        const price=await products.nth(i).locator(".a-price-whole").first().innerText().catch(()=>"Price not available")
        console.log("Product name:",productname)
        console.log("Price:",price)

    }
}
)