import {test ,expect} from '@playwright/test'  // this is used for without fixture
import { RestAPI } from '../../API_FRAMWORK/restAPI/restmethod_api_Page'
test.describe("Restful api tets cases", () => {
    //without using fixture
    test ("get all the object and verify", async({request})=>{
        const restfapi= new RestAPI(request);
        const data:any= await restfapi.get_all_object_details()
        const response=data[0];
        const status=data[1]
        expect(response.length).toBe(13)
        expect(status).toBe(200)
        })

    
    test("get one the object and verify", async ({ request }) => {
        const restfapi = new RestAPI(request);
        const data: any = await restfapi.get_one_object_details()
        const response = data[0];
        const status = data[1]
        expect(response.id).toBe("6")
        expect(status).toBe(200)

    })
})