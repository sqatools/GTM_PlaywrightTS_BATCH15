import {Page} from '@playwright/test'

export class Basepage{
 readonly page : Page
 constructor(page:Page)
 {
    this.page=page
 }

 async LaunchUrl(url:string){
  await this.page.goto("url")
  await this.page.waitForLoadState("domcontentloaded") 

 }
async waitForTime(time:number){
    this.page.waitForTimeout(time)
}
}