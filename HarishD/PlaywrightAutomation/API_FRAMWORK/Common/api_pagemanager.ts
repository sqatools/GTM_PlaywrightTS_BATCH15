import {RestAPI} from '../../API_FRAMWORK/restAPI/restmethod_api_Page'

import { APIRequestContext } from '@playwright/test'

 export class APIPAGEMANAGER{

    request :APIRequestContext
    restfulAPI: RestAPI

    constructor(request :APIRequestContext){

        this.request=request

        this.restfulAPI = new RestAPI(this.request)
       }
}