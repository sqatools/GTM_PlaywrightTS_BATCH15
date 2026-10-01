import {test as base} from "@playwright/test"

import { APIPageManager } from "../api/common/ApiPageManager" 


type MyFixture ={

    apiPManager :APIPageManager
    userdata:any

}

export const test = base.extend<MyFixture>({

    apiPManager : async({request},use )=>{
        
        await use(new APIPageManager(request))
        // tear down execution 
        
        console.log("execution complated")
    }
})
