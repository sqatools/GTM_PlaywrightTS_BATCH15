import { RestFullAPI } from "../restfulapi/restFul-API-Page";
import { APIRequestContext } from "@playwright/test";

export class APIPageManager {
    request: APIRequestContext
    restfapi: RestFullAPI
    constructor(request: APIRequestContext) {
        this.request = request
        this.restfapi = new RestFullAPI(this.request)
    }


}