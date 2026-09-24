import {expect, test} from '@playwright/test'

test.describe("Playwight Assertion and verification", async()=>{

    test("Generic assertion Page", async({page}) =>{
        var value =1
    expect(value).toEqual(2)
    })

    test("Test Cases potray to valid the steps", async({page})=>{
        // Match instance of a class.
                class Example {}
                expect(new Example()).toEqual(expect.any(Example));
        
                // Match any number.
                expect({ prop: 1 }).toEqual({ prop: expect.any(Number) });
        
                // Match any string.
                expect('abc').toEqual(expect.any(String));
        
            });

             test("verify for undefined and values", ()=> {
                    console.log("Hello")
    })
