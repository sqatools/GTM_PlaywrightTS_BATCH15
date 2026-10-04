import { APIBase } from "../common/api_Base";
import { APIRequestContext } from "@playwright/test";
import * as TestData from '../../testdata/api-testdata.ts'

export class RestFullAPI extends APIBase {
constructor (request : APIRequestContext) {
     super(request)
}

async get_all_object_details () {
    const response = await this.get_method(TestData.RestFullAPI.common_url)
    return [await response.json(), response.status()]
}
async get_one_object_details () {
    const update_url = `${TestData.RestFullAPI.common_url}/${TestData.RestFullAPI.one_obj_id}`
    const response = await this.get_method(update_url )
    return [await response.json(), response.status()]
}

async get_new_object_details(){
    const response = await this.post_method(
        TestData.RestFullAPI.common_url,
        TestData.RestFullAPI.create_object_request_body,
        TestData.RestFullAPI.Hearders,
    )
    console.log(await response.json())
     return [await response.json(), response.status()]
    
}

async get_new_object_details(){
    const response = await this.post_method(
        TestData.RestFullAPI.common_url,
        TestData.RestFullAPI.create_object_request_body,
        TestData.RestFullAPI.Hearders,
    )
    console.log(await response.json())
     return response
    
}