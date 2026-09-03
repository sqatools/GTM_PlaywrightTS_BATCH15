import {test} from '@playwright/test'

test.describe("Annotations", ()=>{
    //will focus on this test case

    // test.only("Test case1 started", async({page})=>{
    //     console.log("Test case1 execution started")
    // })
//unconditional skip
 test("Test case2 started", async({page})=>{
    test.skip()
        console.log("Test case2 execution started")
    })

     test("Test case3 started", async({page,browserName})=>{
        test.skip(browserName == 'firefox', "Firefox is not allowed")
        console.log(browserName)
        console.log("Test case3 execution started")
    })
    //It will skip the test cases until certain issue is resolved
     test.fixme("Test case4 started", async({page})=>{
        console.log("Test case4 execution started")
    })

      test("Test case5 started", async({page})=>{
        test.fail()//expect to fail
        console.log("Test case5 execution started")
    })

     test("Test case6 started", async({page,browser})=>{
        test.info().annotations.push({type: 'Browser Version', description: browser.version()})
        test.info().annotations.push({type: 'JIRA-6789', description:'https://automationexercise.com/login'})
        console.log("Test case6 execution started")
    })

})