import {test} from '@playwright/test'
import * as dotenv from 'dotenv';
import * as path from 'path'; 
dotenv.config({path:path.join(__dirname,'../../../../.env')});

test.describe("Open HRM website login", ()=>{
    test("Login with Open HRM website", async({page})=>{
        console.log("this will execute only in qa env")
        test.skip(process.env.TEST_ENV == 'prod' || process.env.TEST_ENV == 'stage' )
await page.goto(process.env.BASE_URL!);
await page.getByPlaceholder("Username").fill(process.env.USERNAME_VALUE!);
await page.getByPlaceholder("password").fill(process.env.PASSWORD_VALUE!);
await page.getByRole("button", {name: 'Login'}).click();

});

test("Enter first name and last in stage env", async({page}) =>{
    test.skip(process.env.TEST_ENV == 'prod' || process.env.TEST_ENV == 'qa' )
    await page.goto(process.env.BASE_URL!);
    await page.locator("#firstname").first().fill(process.env.USERNAME_VALUE!)
    await page.locator("#lastname").last().fill(process.env.PASSWORD_VALUE!)
})

test("Sauce lab demo login in rod", async({page}) =>{
    test.skip(process.env.TEST_ENV == 'prod' || process.env.TEST_ENV == 'qa' )
    await page.goto(process.env.BASE_URL!);
    await page.getByPlaceholder("Username").fill(process.env.USERNAME_VALUE!)
    await page.getByPlaceholder("Password").fill(process.env.PASSWORD_VALUE!)
    await page.getByRole("button", {name : "Login"}).click()

})

test("Read multiple environment files value", async()=>{
    console.log(process.env.TEST_ENV!)
console.log(process.env.USERNAME_VALUE!)
console.log(process.env.BASE_URL!)
console.log(process.env.PASSWORD_VALUE!)
})
});
