import { apiBase } from "../common/apiBase";
import { APIRequestContext } from "@playwright/test";
import * as testdata from '../../testdata/ApiTestData.ts'

export class RestFullApi extends apiBase {


    constructor(request:APIRequestContext)
    {
        super(request)
    }

    async get_allObjectDetails()
    {
       const response= await this.get_method(testdata.RestFullApi.common_url)

       return [await response.json() , response.status()]

    }

    async get_One_ObjectDetails()
    {
        //const updatedUrl = `${testdata.RestFullApi.common_url}/${testdata.RestFullApi}`
        const updatedUrl = `${testdata.RestFullApi.common_url}/${testdata.RestFullApi.one_obj_id}`;

       const response= await this.get_method(updatedUrl)
       console.log(updatedUrl);

       return [await response.json() , response.status()]

    }

}