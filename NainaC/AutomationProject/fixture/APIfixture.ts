import {test as base} from '@playwright/test'
import { APIpageManager } from '../api/common/apiPageManager'
import JsonData from '../testdata/testdata.json'


type MyFixtures = { 
apiPageM : APIpageManager; 
}

export const test = base.extend<MyFixtures>({
apiPageM : async({request}, use) =>{
    const PM = new APIpageManager(request);
    await use(PM)
    //tear down section
     console.log("execution  completed")
}
})