import {test} from '@playwright/test'
test("Select all Checkboxes using Advance xpath",async({page})=>
{
await page.goto("https://sqatools.in/dummy-booking-website/")
await page.locator("//td[text()='Indore']/preceding-sibling::td/input").check()
const cityArray=['Mumbai','Pune','Kolkata','Hyderabad','Orangabad','Delhi']
for(var city of cityArray)
{
  await page.locator(`//td[text()='${city}']/preceding-sibling::td/input`).check()
}
})

test("All college names",async({page})=>
{
    await page.goto("https://www.nirfindia.org/Rankings/2025/CollegeRanking.html")
    const allRows=await page.locator("//table[@id='tbl_overall']/tbody/tr").all()
    for(var i=1;i<=allRows.length;i++)
    {
        const collegeDetails=await page.locator(`//table[@id='tbl_overall']/tbody/tr[${i}]/td[2]`).textContent()
        console.log(i,collegeDetails)
        console.log("----------------------")
    }
})