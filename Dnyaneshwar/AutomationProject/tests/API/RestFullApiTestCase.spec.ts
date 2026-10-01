//import { expect, request, test } from '@playwright/test'

import{test} from '../../fixture/apifixture.ts'
import { RestFullApi } from '../../api/restfullapi/restFul-API-Page'
import { expect } from '@playwright/test'

test.describe("Restfull API Test cases", async () => {

    test("get all object and verify", async ({ apiPManager }) => {

        //const restfapi = new RestFullApi(request)

        //const data: any = await restfapi.get_allObjectDetails();
       const data: any = await apiPManager.restfapi.get_allObjectDetails()

        console.log(data)

        const response = data[0]
        const status = data[1]

        expect(response.length).toBe(13)
        expect(status).toBe(200)


    })
     test("get One object and verify", async ({ apiPManager }) => {

       // const restfapi = new RestFullApi(request)

        const data: any = await apiPManager.restfapi.get_One_ObjectDetails()
        console.log(data)

        const response = data[0]
        const status = data[1]

        expect(response.id).toBe("8")
        expect(status).toBe(200)

    })

})