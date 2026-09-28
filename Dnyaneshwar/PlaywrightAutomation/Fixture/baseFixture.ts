
import { test as base } from '@playwright/test';
import { PageManager } from "../Pages/Common/PageManager";  

import  JsonData  from '../testdata/testdata.json'


type MyFixture = {
    PageM:PageManager

    userdata :any
   
};

export const test = base.extend<MyFixture>({

    PageM: async ({page}, use) => {

        await use(new PageManager(page))
       
        }, 
        // fixture 2

        userdata : async ({},use:any)=>{
            const data:any =JsonData
            await use(data)
        }
});