import { Page } from "@playwright/test";

export class BasePage {

    readonly page: Page

    constructor(page:Page)
    {
        this.page=page;

    }

    async Navigat(url:string)
    {
        await this.page.goto(url)
        await this.page.waitForLoadState("domcontentloaded")
        
    }
    async waitForTime(time:number)
    {

     await this.page.waitForTimeout(time)

    }
}