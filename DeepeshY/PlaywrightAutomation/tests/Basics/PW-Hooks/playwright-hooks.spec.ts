import {test} from '@playwright/test'

test.describe("Execute test cases with hooks", async()=> {
    // Execute before each of the test case executions Of the test suite 
    test.beforeEach(()=> {
        console.log("----Test Execution Started----")
    })

    // After each hook, execute after the execution of each test case of test suite. 
    test.afterEach(()=> {
        console.log("----Test Execution Completed----")
    })

    test.beforeAll(()=> {
        console.log("---- Test suite executed started ----")
    })

    test.afterAll(()=> {
        console.log("---- Test suite executed completed ----")
    })

    test("First Test Cases", ()=> {
        console.log("First Test case execution")
    })

    test("Second Test Cases", ()=> {
        console.log("Second Test case execution")
    })

    test("Third Test Cases", ()=> {
        console.log("Third Test case execution")
    })

    test("Fourth Test Cases", ()=> {
        console.log("Fourth Test case execution")
    })
})