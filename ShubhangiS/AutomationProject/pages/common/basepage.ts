import{Page} from '@playwright/test'

export class basepage{
    readonly page: Page

    constructor(page: Page){
        this.page=page
    }
    navigate(url: string){
        this.page.goto(url)
    }
}