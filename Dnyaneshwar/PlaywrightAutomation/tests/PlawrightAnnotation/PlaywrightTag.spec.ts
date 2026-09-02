import { test } from '@playwright/test'

//npx playwright test --grep "@system"  :- to run tag Test cases 
//npx playwright test --grep-invert "@sanity" :- revese like expect sanity all TC to Run 

test.describe("playwright tags", () => {

    test("Test case 1",{
        tag:'@smoke'
    }, async ({ page }) => {

        console.log("test case 1")

    })

    test("Test case 2",{
        tag:'@smoke'
    }, async ({ page }) => {

        console.log("test case 2")

    })

    test("Test case 3",{
        tag:'@sanity'
    }, async ({ page }) => {

        console.log("test case 3")


    })
    test("Test case 4",{
        tag:'@Regression'
    }, async ({ page }) => {

        console.log("test case 4")


    })
    test("Test case 5",{
        tag:'@system'
    }, async ({ page }) => {

        console.log("test case 5")


    })

    test("Test case 6",{
        tag:'@sanity'
    }, async ({ page }) => {

        console.log("test case 6")


    })


})