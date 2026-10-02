import {test, expect} from '@playwright/test'

test.describe("API Test Cases Automation",  () =>{
    test("Test Case to create all users with get methods", async ({request}) =>{
        const url= ("https://api.restful-api.dev/objects")
        const response = await request.get(url)
        expect (response).toBeOK
        const JSONResponse= await response.json()
        const StatusCode = response.status()
        expect (StatusCode).toBe(200)
        expect (JSONResponse.length).toBe(13)
        console.log(StatusCode, JSONResponse)
    })


     test("Get 1 object detail with get methods", async ({request}) =>{
        const url= ("https://api.restful-api.dev/objects")
        const response = await request.get(url)
        expect (response).toBeOK
        const JSONResponse= await response.json()
        const StatusCode = response.status()
        expect (StatusCode).toBe(200)
        expect (JSONResponse.length).toBe(13)
        console.log(StatusCode, JSONResponse)
    })


     test("Create Object with POST methods", async ({request}) =>{
        const url= ("https://api.restful-api.dev/objects")
        const response = await request.get(url)
        expect (response).toBeOK
        const JSONResponse= await response.json()
        const StatusCode = response.status()
        expect (StatusCode).toBe(200)
        expect (JSONResponse.length).toBe(13)
        console.log(StatusCode, JSONResponse)
    })
})