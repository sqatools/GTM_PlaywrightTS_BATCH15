import {test} from '@playwright/test'
import {loginPage} from '../pages/loginPage.ts'

 test('logintest', async({page})=>{
  const lp=new loginPage(page);
  await lp.launchurl("https://www.saucedemo.com/")
  await lp.Enterusername("standard_user");
  await lp.Enterpassword("secret_sauce");
  await lp.Loginclick();
  


 })

