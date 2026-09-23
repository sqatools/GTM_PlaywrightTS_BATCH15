import {test} from '@playwright/test'

test.describe("Open HRM website login", ()=> {
    test("Login with Open HRM website", async ({page}) => {
        // if we want to read baseURL variable from config file
        // then page.goto("/"). method, we just type /
        await page.goto(process.env.BASE_URL!)
        await page.getByPlaceholder("Username").fill(process.env.USERNAME_VALUE!)
        await page.getByPlaceholder("Password").fill(process.env.PASSWORD_VALUE!)
        await page.getByRole("button", {name: "Login"}).click()
    });

    test("Read multiple envionment files value", ()=> {
        console.log(process.env.QAENV)
        console.log(process.env.BASE_URL!)
        console.log(process.env.USERNAME_VALUE!)
        console.log(process.env.PASSWORD_VALUE!)
    });
});