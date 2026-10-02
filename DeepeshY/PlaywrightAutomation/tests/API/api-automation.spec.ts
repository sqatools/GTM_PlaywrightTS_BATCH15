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

    test("Create object with post method:", async({request})=> {
        const url = "https://api.restful-api.dev/objects"
        const request_body = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }

        const headers = {"content-type": "application/json"}

        const response = await request.post(url, {
            data : request_body,
            headers : headers
        })
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const StatusCode = response.status()
        expect(StatusCode).toBe(200)
        console.log(StatusCode, JSONResponse)
    })

   
});