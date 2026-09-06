import {test} from '@playwright/test'

test.describe("playwright Annotation",()=>{

    // test.only("Test case1",async({page})=>{
   
    //     console.log("Test Case1 Execution Started")

    // })

    test("Test case2",async({page})=>{
   
        test.skip();
        console.log("Test Case2 Execution Started")

    })
    test("Test case3",async({page,browserName})=>{
   
        test.skip(browserName =='firefox',"browser is not allowed")
        console.log("Test Case4 Execution Started")

    })
    test.fixme("Test case4",async({page})=>{
   
        console.log("Test Case4 Execution Started")

    })
    test("Test case5",async({page})=>{
   
        test.fail();
        console.log("Test Case5 Execution Started")

    })
    test("Test case6",async({page,browser})=>{
   
        test.info().annotations.push({type : 'Browser vesrion',description : browser.version()})
        test.info().annotations.push({type : 'Jira-NSADT-22452',description : 'https://www.amazon.in/'})

        console.log("Test Case5 Execution Started")

    })

});