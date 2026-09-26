import { expect } from '@playwright/test';
import {test}  from '../../fixtures/BaseFixture.ts'

test.describe('login feature test cases', () => {
    test('login with valid credentials', async ({PManager}) => {
        await PManager.loginPage.navigate('https://www.saucedemo.com/');
        await PManager.loginPage.login('standard_user', 'secret_sauce');
        await expect(PManager.loginPage.verifydashboardheading()).toBeTruthy();
    });
});