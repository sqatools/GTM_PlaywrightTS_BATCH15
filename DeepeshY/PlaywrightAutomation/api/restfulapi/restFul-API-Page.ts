import { APIRequestContext } from "@playwright/test";
import { APIBase } from "../common/apiBase";
import * as TestData from '../../testdata/api-testdata.ts'

export class RestFullAPI extends APIBase {
    constructor(request: APIRequestContext) {
        super(request)
    }

    async get_all_object_details() {
        const response = await this.get_method(TestData.RestFullAPI.common_url)
        return [await response.json(), response.status()]
    }

    async get_one_object_details() {
        const update_url = `${TestData.RestFullAPI.common_url}/${TestData.RestFullAPI.one_obj_id}`
        const response = await this.get_method(update_url)
        return [await response.json(), response.status()]
    }

    async add_new_object() {
        const response = await this.post_method(
            TestData.RestFullAPI.common_url,
            TestData.RestFullAPI.creat_object_request_body,
            TestData.RestFullAPI.Headers,
        )
        console.log(await response.json())
        return response
    }

    async update_object_info() {
        const response = await this.add_new_object()
        const ResJSON = await response.json()
        const id = ResJSON['id']
        const new_url = `${TestData.RestFullAPI.common_url}/${id}`
        const response1 = await this.put_method(
            new_url, 
            TestData.RestFullAPI.update_request_body)
        console.log(response1)
        return response
    }

    async patch_object_info() {
        const response = await this.add_new_object()
        const ResJSON = await response.json()
        const id = ResJSON['id']
        const new_url = `${TestData.RestFullAPI.common_url}/${id}`
        const response1 = await this.patch_method(
            new_url, 
            TestData.RestFullAPI.patch_request_body)
        console.log(response1)
        return response
    }
}