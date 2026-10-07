import {test} from '@playwright/test'


test.describe("Execute Test Case with hooks", async()=>{
    test.beforeEach(() => {
console.log("Test Execution Started")
    })

    test.afterEach(()=>{
        console.log("Test Execution Completed")
    })

    test.beforeAll(() =>{
console.log("Test Suite execution started")
    })


    test.afterAll(() =>{
console.log("Test suite execution completed")
    })

    test("First Test case", ()=>{
        console.log("First test case Execution")
    })

    test("2nd Test case", ()=>{
        console.log("Second test case Execution")
    })

    test("3rd Test case", ()=>{
        console.log("Third test case Execution")
    })

    test("4th Test case", ()=>{
        console.log("Fourth test case Execution")
    })
})