import {test} from '@playwright/test'

test.describe("booking website ",()=>{

    test.describe("car  bookig",()=>{

        test("car test1 booking",()=>{

            console.log("car test1 bookig")
        })

        test("car test2 booking",()=>{
            console.log("car test2 booking")
        })


    })

    test.describe("hotel bookig",()=>{

        test("hotel test1 bookig",()=>{
        
            console.log("hotel test1 booking")

        })
        test("hotel test2 booking",()=>{
            console.log("hotel test2 booking ")
        })

    })

    test.describe("car bookig",()=>{

        test("car test1 booking",()=>{
            console.log("car test1 booking")
        })
        test("car test2 booking",()=>{
            console.log("car test2 booking");
        })
    })
     
})