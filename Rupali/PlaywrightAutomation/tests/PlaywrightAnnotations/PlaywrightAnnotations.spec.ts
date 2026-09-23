import {test} from '@playwright/test'
test.describe("playwright annotations",()=>{

// test.only("Test case1", async({page})=>{

//     console.log("Test case1 is executed")
// })

test("Test case2", async({page})=>{
    test.skip();
    console.log("Test case2 is executed")
})
test("Test case3", async({page, browserName})=>{
     test.skip(browserName == 'firefox', "Firefox browser is not allowed")
        console.log(browserName)
    console.log("Test case3 is executed")
})
test.fixme("Test case4", async({page})=>{

    console.log("Test case4 is executed")
})
test("Test case5", async({page})=>{
    test.fail()

    console.log("Test case5 is executed")
})
  test("Test Case6", async({page, browser})=> {
       // expected to be failures
       test.info().annotations.push({ type: 'Browser Version', description: browser.version()}); 
       test.info().annotations.push({ type: 'JIRA-12345', description: 'https://github.com/gitruchika/Selenium_Automation'}); 
       console.log("Test Case6 Execution Started")

    });

})