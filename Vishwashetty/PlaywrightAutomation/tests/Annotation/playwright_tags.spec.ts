import {test} from '@playwright/test'

test.describe("Playwright Annotation", ()=> {
 
    test("Test Case1", {
        tag: '@smoke'
    }, async({page})=> {
        console.log("Test Case1 Execution Started")

    });

    test("Test Case2" , {
        tag: '@smoke'
    }, async({page})=> {
        console.log("Test Case2 Execution Started")

    });

    test("Test Case3", {
        tag: '@sanity'
    }, async({page, browserName})=> {
        console.log(browserName)
        console.log("Test Case3 Execution Started")

    });

    
    test("Test Case4", {
        tag: '@sanity'
    }, async({page})=> {
        console.log("Test Case4 Execution Started")

    });

    test("Test Case5", {
        tag: '@regression'
    }, async({page})=> {
        console.log("Test Case5 Execution Started")

    });

     test("Test Case6", {
        tag: '@regression'
    }, async({page, browser})=> {
       
       console.log("Test Case6 Execution Started")

    });





});