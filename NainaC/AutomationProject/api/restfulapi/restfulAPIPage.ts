import { APIRequestContext } from "@playwright/test";
import { APIBase } from "../common/apiBase";
import * as TestData from '../../testdata/api-testdata'

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
            TestData.RestFullAPI.create_object_request_body,
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
        const response1 = await this.request.put(
            new_url, {
         data:   TestData.RestFullAPI.update_object_request_body
        })
        console.log(await response1.json())
        return response1
    }

    async patch_object_info() {
        const response = await this.add_new_object()
        const ResJSON = await response.json()
        const id = ResJSON['id']
        const new_url = `${TestData.RestFullAPI.common_url}/${id}`
        const response1 = await this.request.patch(
            new_url, {
         data:   TestData.RestFullAPI.patch_request_body
         })
        console.log(response1)
        return response1
    }
}