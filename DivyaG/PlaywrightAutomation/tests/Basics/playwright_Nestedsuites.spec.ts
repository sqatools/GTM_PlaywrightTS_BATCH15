import {test} from '@playwright/test'
test.describe("Booking website for Nested suite",()=>{
    test.describe("Booking Flight suite", ()=> {
    test("Flight Test1",()=>{
        console.log("Flight Testcase1")
    });

     test("Flight Test2",()=>{
        console.log("Flight Testcase2")
    });
});
     test.describe("Booking Hotel suite", ()=> {
     test("Hotel booking Test1",()=>{
        console.log("Hotel booking Testcase1")
    });

    
     test("Hotel booking Test2",()=>{
        console.log("Hotel booking Testcase2")
    });

});
   
 test.describe("Booking Car suite", ()=> {
    
     test("car booking Test1",()=>{
        console.log("car booking Testcase1")
    });
    
    test("car booking Test2",()=>{
        console.log("car booking Testcase2")
    });
 
 })
})