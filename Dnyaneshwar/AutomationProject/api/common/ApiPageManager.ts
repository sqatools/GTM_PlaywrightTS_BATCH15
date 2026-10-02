import  {RestFullApi}from '../restfullapi/restFul-API-Page'

import { APIRequestContext } from '@playwright/test'

export class APIPageManager {

    request:APIRequestContext
    restfapi:RestFullApi

    constructor(request:APIRequestContext)
    {
        this.request=request
        this.restfapi=new RestFullApi(request)
    }
}