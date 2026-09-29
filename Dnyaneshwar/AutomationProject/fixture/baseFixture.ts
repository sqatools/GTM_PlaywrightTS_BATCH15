import {test as base} from "@playwright/test"

import { PageManager } from "../Pages/common/PageManager"

type MyFixture ={

    pManager :PageManager

}

export const test = base.extend<MyFixture>({

    pManager : async({page},use )=>{
        const PM = new PageManager(page)
        await use(PM)

        // tear down execution 
        
        console.log("execution complated")
    }
})
