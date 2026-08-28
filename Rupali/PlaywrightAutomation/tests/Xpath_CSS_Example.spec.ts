import {test} from "@playwright/test"

test("xpath learning", async({page})=>{

    await page.goto("https://sqatools.in/dummy-booking-website/")
    await page.locator("//td[text()= 'Mumbai']/preceding-sibling::td/input").check()
  
    const cityArray =["Pune", "Kolkata", "Indore", "Hyderabad", "Orangabad", "Delhi"]

    for(var city of cityArray){
        await page.locator(`//td[text()='${city}']/preceding-sibling::td/input`).check()
    
        await page.waitForTimeout(2000);

    }
})

test("get All College Names", async({page})=>{
await page.goto("https://www.nirfindia.org/Rankings/2025/CollegeRanking.html")
const allrows =await page.locator("//table[@id='tbl_overall']/tbody/tr").all();

for(var i=1; i<allrows.length;i++)
{
    const collegeDetails =await page.locator(`//table[@id='tbl_overall']/tbody/tr[${i}]/td[2]`).textContent()
    console.log(i, collegeDetails)

    console.log("---------------------------")
}
})