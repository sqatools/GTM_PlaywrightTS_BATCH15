import {test} from '@playwright/test'

test.describe("Annotations", ()=>{
    
 test("Test case1 started", {

    tag:'@sanity'

    },async({page})=>{
        console.log("Test case1 execution started")
    })

     test("Test case2 started", {
    
    tag:'@sanity'

    },async({page})=>{
        
        console.log("Test case2 execution started")
    })
    
     test("Test case3 started", {
    
    tag:'@Regression'

    },async({page})=>{
        console.log("Test case3 execution started")
    })

      test("Test case4 started",
         {
    
    tag:'@Regression'

    },async({page})=>{
        
        console.log("Test case4 execution started")
    })

     test("Test case5 started",
         {
    
    tag:'@smoke'

    }, async({page})=>{
        console.log("Test case5 execution started")
    })

    test("Test case6 started", 
        {
    
    tag:'@smoke'

    }, async({page})=>{
        console.log("Test case6 execution started")
    })

})