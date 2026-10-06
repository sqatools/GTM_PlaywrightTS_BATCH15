import { BasePage } from "../../common/BasePage";
import { Page } from "@playwright/test";

export class HomePageLocator extends BasePage {


    constructor(page:Page)
    {
        super(page)
    }

    get searchBar()
    {
        return this.page.getByPlaceholder("Search Amazon.in")
    }

    get searchButton()
    {
        return this.page.locator("#nav-search-submit-button")
    }

    get productResults() {
    return this.page.locator('[data-component-type="s-search-result"]');
}


}