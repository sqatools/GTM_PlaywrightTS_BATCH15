import {test} from '@playwright/test'

test("Select all checkboxes using Advance xpath", async({page})=> {
    await page.goto("https://sqatools.in/dummy-booking-website/")
    await page.locator("//td[text()='Mumbai']//preceding-sibling::td/input").check()
    const cityArray = [ 'Pune','Indore','Kolkata', 'Hyderabad', 'Orangabad', 'Delhi']
    for (var city of cityArray) {
        await page.locator(`//td[text()='${city}']/preceding-sibling::td/input`).check()
        await page.waitForTimeout(2000)
    }
})

test("Get all colleges name", async({page})=> {
    await page.goto("https://www.nirfindia.org/Rankings/2025/CollegeRanking.html")
    const allRows = await page.locator("//table[@id='tbl_overall']/tbody/tr").all()
    for(var i=1; i<=allRows.length; i++) {
        const collegeDetails = await page.locator(`//table[@id='tbl_overall']/tbody/tr[${i}]/td[3]`).textContent()
        console.log(i, collegeDetails)
        console.log("----------------------")
    }
})