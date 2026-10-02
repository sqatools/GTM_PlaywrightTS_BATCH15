import { test } from '@playwright/test'

test.describe(" Open source HRM website", () => {

    test("Login to Hrm website", async ({ page }) => {
        test.skip(process.env.TEST_ENV == 'prod' || process.env.TEST_ENV == 'stage')  //here prod and stage env will skip this test case
        console.log("Execute this test case in Qa ENV")
        // if we want to read base url variable form config file
        // then  page.goto  ("/").method , we need to write
        //  await page.goto("/")
        await page.goto(process.env.Base_Url!)   // Here, Base_Url is an environment variable. You can store different URLs with different names in your .env file.
        await page.getByPlaceholder("Username").fill(process.env.username_value!)  // read the data from .env
        await page.getByPlaceholder("Password").fill(process.env.Password_value!)   //read the data from .env
        await page.getByRole('button', { name: ' Login ' }).click()
    })

    test("Stage env test case", async ({ page }) => {

        test.skip(process.env.TEST_ENV == 'prod' || process.env.TEST_ENV == 'qa')  //here prod and stage env will skip this test case
        await page.goto(process.env.Base_Url!)
        await page.locator("#firstname").first().fill(process.env.username_value!)
        await page.locator("#firstname").last().fill(process.env.Password_value!)
    })

    test("Sauce lab demo login: prod", async ({ page }) => {
        test.skip(process.env.TEST_ENV == 'stage' || process.env.TEST_ENV == 'qa')
        await page.goto(process.env.Base_Url!)
        await page.getByPlaceholder("Username").fill(process.env.username_value!)
        await page.getByPlaceholder("Password").fill(process.env.Password_value!)
        await page.getByRole("button", { name: "Login" }).click()
    })
    test("Read multiple envionment files value", () => {
        console.log(process.env.TEST_ENV)
        console.log(process.env.Base_Url!)
        console.log(process.env.username_value!)
        console.log(process.env.Password_value!)
    });

    


})