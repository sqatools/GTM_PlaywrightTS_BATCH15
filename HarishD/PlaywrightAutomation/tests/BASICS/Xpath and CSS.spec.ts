import { test } from '@playwright/test';

test("select all the checkbox using xpath", async ({ page }) => {

    await page.goto("https://sqatools.in/dummy-booking-website/");

    await page.locator("//td[text()='Pune']/preceding-sibling::td/input").check()

    const cityarray = ['Mumbai', 'Pune', 'Indore', 'Kolkata', 'Hyderabad', 'Orangabad', 'Delhi']

    for (var city of cityarray)
        await page.locator(`//td[text()='${city}']/preceding-sibling::td/input`).click()
    await page.waitForTimeout(2000)
})



test("Get all colleges name", async({page})=> {
    await page.goto("https://www.nirfindia.org/Rankings/2025/CollegeRanking.html")
    const allRows = await page.locator("//table[@id='tbl_overall']/tbody/tr").all()
    for(var i=1; i<=allRows.length; i++) {
        const collegeDetails = await page.locator(`//table[@id='tbl_overall']/tbody/tr[${i}]/td[2]`).textContent()
        console.log(i, collegeDetails)
        console.log("----------------------")
    }
})
