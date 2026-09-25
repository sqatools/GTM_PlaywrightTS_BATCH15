import {test} from '@playwright/test'

import { LoginPage } from '../../Pages/saucelab/Login/LoginPage'

test("Test sauce lab Login ",async({page})=>{

    const loginPage = new LoginPage(page)

    await loginPage.navigate("https://www.saucedemo.com/")

    await loginPage.login('standard_user','secret_sauce')

    const text =await loginPage.DashboadingHeading.textContent();

    console.log(text)
    await loginPage.DashboadingHeading.isVisible();

})