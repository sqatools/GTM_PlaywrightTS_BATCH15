import {test as base} from '@playwright/test'
import {PageManager} from '../pages/common/PageManager'


type MyFixture= { 
Pmanager : PageManager 
}

export const test = base.extend<MyFixture>({
Pmanager : async({page}, use) =>{
    const PM = new PageManager(page)
    await use(PM)
    //tear down section
     console.log("execution  completed")
}
})


