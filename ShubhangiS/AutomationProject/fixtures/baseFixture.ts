import {test as base} from '@playwright/test';
import{PageManager} from '../pages/common/pagemanager'

type MyFixture={

    PManager: PageManager
}
export const test= base.extend<MyFixture>({
PManager: async({page},use)=>{

    const PM =new PageManager(page)
    await use(PM)
    console.log("Execution completed")

}



})