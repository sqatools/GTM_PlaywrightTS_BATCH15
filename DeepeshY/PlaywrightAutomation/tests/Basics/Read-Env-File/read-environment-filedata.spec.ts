import {test} from '@playwright/test'

test.describe("Open HRM website login", ()=> {
    test("Login with Open HRM website", async ({page}) => {
        test.skip(process.env.TEST_ENV == 'prod' || process.env.TEST_ENV == 'stage')
        console.log("This test case will execute only in QA environment")
        // if we want to read baseURL variable from config file
        // then page.goto("/"). method, we just type /
        await page.goto(process.env.BASE_URL!)
        await page.getByPlaceholder("Username").fill(process.env.USERNAME_VALUE!)
        await page.getByPlaceholder("Password").fill(process.env.PASSWORD_VALUE!)
        await page.getByRole("button", {name: "Login"}).click()
    });

    test("Enter First and Last for Stage Environment", async({page})=> {
        test.skip(process.env.TEST_ENV == 'prod' || process.env.TEST_ENV == 'qa')
        await page.goto(process.env.BASE_URL!)
        await page.locator("#firstname").first().fill(process.env.USERNAME_VALUE!)
        await page.locator("#firstname").last().fill(process.env.PASSWORD_VALUE!)

    })

    test("Sauce lab demo login: prod", async({page})=> {
        test.skip(process.env.TEST_ENV == 'stage' || process.env.TEST_ENV == 'qa')
        await page.goto(process.env.BASE_URL!)
        await page.getByPlaceholder("Username").fill(process.env.USERNAME_VALUE!)
        await page.getByPlaceholder("Password").fill(process.env.PASSWORD_VALUE!)
        await page.getByRole("button", {name: "Login"}).click()
    })

    test("Read multiple envionment files value", ()=> {
        console.log(process.env.TEST_ENV)
        console.log(process.env.BASE_URL!)
        console.log(process.env.USERNAME_VALUE!)
        console.log(process.env.PASSWORD_VALUE!)
    });
});