import { test } from '../../Fixture/BaseFixtureAPI'
import { expect } from '@playwright/test'
test.describe("Restful api tets cases", () => {
    
    // with using fixture
    test("get all the object and verify", async ({ APIPAGEM }) => {
        const [response, status] = await APIPAGEM.restfulAPI.get_all_object_details()
        expect(response.length).toBe(13)
        expect(status).toBe(200)

    })

    test("get one the object and verify", async ({ APIPAGEM }) => {
            const data: any = await APIPAGEM.restfulAPI.get_one_object_details()
            const response = data[0];
            const status = data[1]
            expect(response.id).toBe("6")
            expect(status).toBe(200)
    
        })

     test("Create new object and verify", async({APIPAGEM})=> {
        const reposne = await APIPAGEM.restfulAPI.add_new_object_details()
        const responseJSON = await reposne.json()
        console.log(responseJSON)
        const status = reposne.status()
        expect(status).toBe(200)
    });

        test("Update new object and verify", async({APIPAGEM})=> {
        const reposne = await APIPAGEM.restfulAPI.update_request_body()
        const responseJSON = await reposne.json();
        console.log(responseJSON)
        const status = reposne.status()
        expect(status).toBe(200)
    });

    })
