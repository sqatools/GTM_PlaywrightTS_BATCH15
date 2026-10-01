import {test} from '../../fixtures/APIFixture.ts'
import { expect } from '@playwright/test'
import { RestFullAPI } from '../../api/restfulapi/restFul-API-Page'

test.describe("Restfull API Test cases", ()=> {
    test("Get All Object and verify", async({apiPageM})=> {
        //const restfapi = new RestFullAPI(request)
        const data:any = await apiPageM.restfapi.get_all_object_details()
        console.log(data)
        const response = data[0]
        const status = data[1]
        expect(response.length).toBe(13)
        expect(status).toBe(200)
    })

     test("Get one Object details and verify", async({apiPageM})=> {
        //const restfapi = new RestFullAPI(request)
        const data:any = await apiPageM.restfapi.get_one_object_details()
        console.log(data)
        const response = data[0]
        const status = data[1]
        expect(response.id).toBe("8")
        expect(status).toBe(200)
    })
})