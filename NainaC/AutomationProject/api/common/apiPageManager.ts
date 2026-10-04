import { RestFullAPI } from "../restfulapi/restfulAPIPage";
import { APIRequestContext } from "@playwright/test";

export class APIpageManager {
    request : APIRequestContext
    restfapi : RestFullAPI
    constructor (request : APIRequestContext ){
        this.request= request
        this.restfapi= new RestFullAPI(this.request)
    }
 


}