import {test} from '@playwright/test'

test("Enter personal details dummy website", async ({page})=> {
    await page.goto("https://www.amazon.jobs/en-US/applicant/login")
    await page.locator
})