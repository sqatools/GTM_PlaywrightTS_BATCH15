import {expect, request, test}from '@playwright/test'


//  npm run test:api : command to execute with custom script in pacage.json 

test.describe("API Automation Tet cases",async()=>{

    test("test case to get all user data using GET method",async({request})=>{

        const url ="https://api.restful-api.dev/objects"

        const response = await request.get(url)

        expect(response).toBeOK()
        const JsonResponse = await response.json()
        const StatusCode =response.status();
        expect(StatusCode).toBe(200)
        expect(JsonResponse.length).toBe(13)
        console.log(StatusCode ,JsonResponse)

    })

    test("Get one Object Detail with GET method ",async({request})=>{

        const url ="https://api.restful-api.dev/objects/7"

        const response = await request.get(url)

        expect(response).toBeOK()
        const JsonResponse = await response.json()
        const StatusCode =response.status();
        expect(StatusCode).toBe(200)
        console.log(StatusCode ,JsonResponse)

    })
    test.skip("Create object with POST method",async({request})=>{

        const url ="https://api.restful-api.dev/objects"

        const response = await request.get(url)

        expect(response).toBeOK()
        const JsonResponse = await response.json()
        const StatusCode =response.status();
        expect(StatusCode).toBe(200)
        expect(JsonResponse.length).toBe(13)
        console.log(StatusCode ,JsonResponse)

    })
})