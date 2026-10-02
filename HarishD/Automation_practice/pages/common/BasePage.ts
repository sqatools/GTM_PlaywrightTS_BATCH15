import {Page } from '@playwright/test'

 export class BasePage {

    //readonly BrowserPage: Page means I create a property to store the Playwright page, and readonly prevents us from changing that page later."
    readonly BrowserPage: Page    // Declare the properties   

    constructor(page: Page) { 
    this.BrowserPage = page   // Initialize the property
}
    async navigate(url: string) {
        await this.BrowserPage.goto(url)
        await this.BrowserPage.waitForLoadState("domcontentloaded")
    }

    async waitforTime(time: number) {
        this.BrowserPage.waitForTimeout(time)
    } 

}
