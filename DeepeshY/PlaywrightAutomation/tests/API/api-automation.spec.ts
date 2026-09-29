import {test, expect} from '@playwright/test'

test.describe("API test cases automation", () => {
    test("Test Case to get all users with get method:", async({request})=> {
        const url = "https://api.restful-api.dev/objects"
        const response = await request.get(url)
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const StatusCode = response.status()
        expect(StatusCode).toBe(200)
        expect(JSONResponse.length).toBe(13)
        console.log(StatusCode, JSONResponse)
    });

    test("get one object details with get method:", async({request})=> {
        const url = "https://api.restful-api.dev/objects/7"
        const response = await request.get(url)
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const StatusCode = response.status()
        expect(StatusCode).toBe(200)
        console.log(StatusCode, JSONResponse)
    });

    test.skip("Create object with post method:", async({request})=> {
        const url = "https://api.restful-api.dev/objects"
        const response = await request.get(url)
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const StatusCode = response.status()
        expect(StatusCode).toBe(200)
        expect(JSONResponse.length).toBe(13)
        console.log(StatusCode, JSONResponse)
    })
});