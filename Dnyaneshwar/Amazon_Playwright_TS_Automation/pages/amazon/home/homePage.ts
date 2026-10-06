import { HomePageLocator } from "./homePageLocator";
import { Page } from "@playwright/test";

export class HomePage extends HomePageLocator {

    constructor(page:Page)
    {
        super(page)
    }

    async searchProduct(product:string)
    {
        await this.searchBar.fill(product)
    }

    async ClickToSearch()
    {
        await this.searchButton.click();
    }
   async getProductPrice(productName: string) {

    const product = this.productResults.filter({
        has: this.page.locator("h2").filter({
            hasText: productName
        })
    });

    return await product.locator(".a-price-whole").first().textContent();
}

// async getProductName(productName: string) {

//     const product = this.productResults.filter({
//         has: this.page.locator("h2").filter({
//             hasText: productName
//         })
//     });

//     return await product.locator("h2").textContent();
// }

async getProductName(productName: string) {

    const product = this.productResults.filter({
        has: this.page.locator("h2").filter({
            hasText: productName
        })
    });

    return await product.locator("h2").last().textContent();
}
}