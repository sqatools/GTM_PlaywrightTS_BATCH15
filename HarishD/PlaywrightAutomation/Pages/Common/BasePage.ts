import {Page } from '@playwright/test'

 export class BasePage {
    readonly BrowserPage: Page
    constructor(page: Page) {
        this.BrowserPage = page
    }

    async navigate(url: string) {
        await this.BrowserPage.goto(url)
        await this.BrowserPage.waitForLoadState("domcontentloaded")
    }

    async waitforTime(time: number) {
        this.BrowserPage.waitForTimeout(time)
    } 

}
