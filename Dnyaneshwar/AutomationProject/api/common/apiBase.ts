import { APIRequestContext } from "@playwright/test";

export class apiBase {
    request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get_method(
        url: string,
        RequestBody: any = null,
        headers: any = null
    ) {
        RequestBody = RequestBody ? RequestBody : {};
        headers = headers ? headers : {};

        const response = await this.request.get(url, {
            data: RequestBody,
            headers: headers
        });

       // console.log(await response.json(), response.status());
       console.log("Status:", response.status());
       console.log("Response:", await response.text());

        return response;
    }

    async post_method(
        url: string,
        RequestBody: any = null,
        headers: any = null
    ) {
        RequestBody = RequestBody ? RequestBody : {};
        headers = headers ? headers : {};

        const response = await this.request.post(url, {
            data: RequestBody,
            headers: headers
        });

        console.log(await response.json(), response.status());

        return response;
    }

    async put_method(
        url: string,
        RequestBody: any = null,
        headers: any = null
    ) {
        RequestBody = RequestBody ? RequestBody : {};
        headers = headers ? headers : {};

        const response = await this.request.put(url, {
            data: RequestBody,
            headers: headers
        });

        console.log(await response.json(), response.status());

        return response;
    }

    async patch_method(
        url: string,
        RequestBody: any = null,
        headers: any = null
    ) {
        RequestBody = RequestBody ? RequestBody : {};
        headers = headers ? headers : {};

        const response = await this.request.patch(url, {
            data: RequestBody,
            headers: headers
        });

        console.log(await response.json(), response.status());

        return response;
    }

    async delete_method(
        url: string,
        RequestBody: any = null,
        headers: any = null
    ) {
        RequestBody = RequestBody ? RequestBody : {};
        headers = headers ? headers : {};

        const response = await this.request.delete(url, {
            data: RequestBody,
            headers: headers
        });

        console.log(await response.json(), response.status());

        return response;
    }
}