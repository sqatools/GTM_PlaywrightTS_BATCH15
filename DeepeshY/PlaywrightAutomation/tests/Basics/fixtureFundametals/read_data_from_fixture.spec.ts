import {test} from '../../../fixtures/testfixture.ts'

test.describe("Fixture test cases", ()=> {
    test("First Test Case:", async({userdata})=> {
        console.log(userdata)

    })

    test("Second Test Case:", async({userdata})=> {
        console.log(userdata)

    })

    test("Third Test Case:", async({userdata})=> {
        console.log(userdata)

    })
})