
import { APIRequestContext } from "@playwright/test";
import { APIBase } from '../Common/api_basefile';
import * as TestData from '../../testdata/api_testdata';

export class RestAPI extends APIBase {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async get_all_object_details() {
        const response = await this.get_method(TestData.restfulapi.common_url);
        return [await response.json(), response.status()];
    }

    async get_one_object_details() {
        const Updated_url = `${TestData.restfulapi.common_url}/${TestData.restfulapi.one_obJ_id}`;
        const response = await this.get_method(Updated_url);
        return [await response.json(), response.status()];
    }

    async add_new_object_details() {
        const response = await this.post_method(
            TestData.restfulapi.common_url,
            TestData.restfulapi.create_request_body,
            TestData.restfulapi.Headers,

        )
        console.log(await response.json())
        return response;
    }

    async update_request_body() {
        const response = await this.add_new_object_details()
        const RJSON = await response.json()
        const id = RJSON['id']
        console.log(id)
        const existing_url = `${TestData.restfulapi.common_url}/${id}`
        const updated_response = await this.put_method(existing_url, TestData.restfulapi.update_request_body)
        console.log(updated_response)
        return updated_response
    }

}
