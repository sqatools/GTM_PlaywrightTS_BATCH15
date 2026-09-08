import {test} from '@playwright/test'

test.describe("Playwright Annotation", ()=> {
    // test.only will allow to focus on one single test
    // test.only("Test Case1", async({page})=> {
    //     console.log("Test Case1 Execution Started")

    // });

    test("Test Case2", async({page})=> {
        test.skip() // unconditional skip
        console.log("Test Case2 Execution Started")

    });

    test("Test Case3", async({page, browserName})=> {
        test.skip(browserName == 'firefox', "Firefox browser is not allowed")
        console.log(browserName)
        console.log("Test Case3 Execution Started")

    });

    // it will skip the test cases , until certain is not resolved
    test.fixme("Test Case4", async({page})=> {
        console.log("Test Case2 Execution Started")

    });

    test("Test Case5", async({page})=> {
        test.fail(); // epxcted to be failures
        console.log("Test Case2 Execution Started")

    });

     test("Test Case6", async({page, browser})=> {
       // expected to be failures
       test.info().annotations.push({ type: 'Browser Version', description: browser.version()}); 
       test.info().annotations.push({ type: 'JIRA-45345', description: 'https://github.com/gitruchika/Selenium_Automation'}); 
       console.log("Test Case2 Execution Started")

    });





});