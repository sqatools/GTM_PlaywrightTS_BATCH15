import {test} from '@playwright/test'

test.describe("Booking Website with Nested Suites", ()=> {

    test.describe("Flight Booking", ()=> { 
        test("Flight Test1", ()=> {
            console.log("Flight Test case1")
        });

        test("Flight Test2", ()=> {
            console.log("Flight Test case2")
        });

    });

    test.describe("Hotel Booking", ()=> { 
        test("Hotel Test1", ()=> {
            console.log("Hotel Test case1")
        });

        test("Hotel Test2", ()=> {
            console.log("Hotel Test case2")
        });

    });

    test.describe("Car Booking", ()=> { 
        test("Car Test1", ()=> {
            console.log("Car Test case1")
        });

        test("Car Test2", ()=> {
            console.log("Car Test case2")
        });

    });

});