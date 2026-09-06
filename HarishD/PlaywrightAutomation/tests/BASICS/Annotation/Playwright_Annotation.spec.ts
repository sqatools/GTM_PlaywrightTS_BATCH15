import { test } from '@playwright/test';

test.describe('Playwright Annotation', () => {

    // //test.only will allow to focus on one single test
    // test.only('Test case1', async ({ page }) => {

    //     console.log("Testcase_1 execute start")
    // })

    test('Testcase_2', async ({ page }) => {

        test.skip()  // unconditional skip
        console.log("Testcase_2 execute start")
    })

    test('Testcase_3', async ({ page, browserName }) => {
        test.skip(browserName == 'firefox', 'Firefox browser is not allowed')     //conditional skip
        console.log(" Testcase_3 start")
    })

    // it will skip the test cases , until certain is not resolved
    test.fixme('Testcase_4', async ({ page }) => {

        console.log("Testcase_4 execute start")
    })


    test('Testcase_5', async ({ page }) => {
        test.fail(); // epxcted to be failures

        console.log("Testcase_5 execute start")
    })
    test('Testcase_6', async ({ page, browser }) => {
           test.info().annotations.push({ type: 'Browser Version', description: browser.version() });
           test.info().annotations.push({ type: 'JIRA-45345', description: 'https://www.saucedemo.com/inventory.html' });
        console.log("Testcase_6 execute start")
    })

})

