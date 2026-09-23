import {test} from '@playwright/test'
test.describe("playwright annotations",()=>{

test("Test case1", {tag:'@smoke'}, async({page})=>{

    console.log("Test case1 is executed")
})

test("Test case2", {tag:'@smoke'}, async({page})=>{
 
    console.log("Test case2 is executed")
})
test("Test case3",{tag:'@sanity'},  async({page, browserName})=>{
        console.log(browserName)
    console.log("Test case3 is executed")
})
test("Test case4",{tag:'@sanity'}, async({page})=>{

    console.log("Test case4 is executed")
})
test("Test case5",{tag:'@regression'}, async({page})=>{
    console.log("Test case5 is executed")
})
  test("Test Case6", {tag:'@regression'}, async({page, browser})=> {
       console.log("Test Case6 Execution Started")

    });

})