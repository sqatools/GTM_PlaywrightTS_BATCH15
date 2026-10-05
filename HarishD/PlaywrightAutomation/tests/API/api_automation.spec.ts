import { test, expect } from '@playwright/test'

test.describe("API test cases automation", () => {
    test("Test Case to get all users with get method:", async ({ request }) => {
        const url = "https://api.restful-api.dev/objects"
        //Sends a GET request to the URL and stores the response.
        const response = await request.get(url)
        expect(response).toBeOK()
        // Converts the JSON response into JavaScript data.
        const JSONResponse = await response.json()
        //It gets the status code from the response.
        const StatusCode = response.status()
        //Here, we are using an assertion to check that the status code is 200.
        expect(StatusCode).toBe(200)
        // Gets the number of items in the response and checks that the API returned exactly 13 items.
        expect(JSONResponse.length).toBe(13)
        console.log(StatusCode, JSONResponse)
    });

    test("get one object details with get method:", async ({ request }) => {
        const url = "https://api.restful-api.dev/objects/7"
        const response = await request.get(url)
        expect(response).toBeOK()
        const JSONResponse1 = await response.json()
        const StatusCode1 = response.status()
        expect(StatusCode1).toBe(200)
        console.log(StatusCode1, JSONResponse1)
    });


    test("Create object with post method:", async ({ request }) => {
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

        const headers = { "content-type": "application/json" }

        const response = await request.post(url, {
            data: request_body,
            headers: headers
        })
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const StatusCode = response.status()
        expect(StatusCode).toBe(200)
        expect(JSONResponse.id).toEqual(expect.any(String))
        expect(JSONResponse.name).toBe("Apple MacBook Pro 16")
        expect(JSONResponse.data.year).toBe(2019)
        expect(JSONResponse.data.price).toBe(1849.99)
        expect(JSONResponse.data["CPU model"]).toBe("Intel Core i9")
        expect(JSONResponse.data["Hard disk size"]).toBe("1 TB")
        console.log(StatusCode, JSONResponse)

    })

});