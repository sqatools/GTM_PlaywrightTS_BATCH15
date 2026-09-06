import {test} from '@playwright/test'

test("get by lable",async ({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    page.getByLabel("Email Address:").fill("dnyaneshwar121");
})