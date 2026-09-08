import {test} from '@playwright/test'

test.describe("QA Practice Hub",async()=>{

    test("Register User",async({page})=>{

        await page.goto("https://eventhub.rahulshettyacademy.com/login")

       await page.getByRole("link",{name:'Register'}).click();

       await page.locator("#register-email").fill("ddandale14@gmail.com")

       await page.locator("#register-password").fill("prakashd@123")

       await page.getByPlaceholder("Repeat your password").fill("prakashd@123")

       await page.locator("#register-btn").click();

      

    })

    test("login user",async({page})=>{

        await page.goto("https://eventhub.rahulshettyacademy.com/login")

        await page.getByPlaceholder("you@email.com").fill("ddandale14@gmail.com")

        await page.getByPlaceholder("••••••").fill("Dnyaneshwar@123")

        await page.getByRole("button",{name:'Sign In'}).click();

    })

     test("Book Event ",async({page})=>{

        await page.goto("https://eventhub.rahulshettyacademy.com/login")

        await page.getByPlaceholder("you@email.com").fill("ddandale14@gmail.com")

        await page.getByPlaceholder("••••••").fill("Dnyaneshwar@123")

        await page.getByRole("button",{name:'Sign In'}).click();

        await page.getByTestId("book-now-btn").first().click();

        test.step("enetr booking details",async()=>{


            await page.locator("form.space-y-4 div.flex div.gap-3").click()

        })

    })




})