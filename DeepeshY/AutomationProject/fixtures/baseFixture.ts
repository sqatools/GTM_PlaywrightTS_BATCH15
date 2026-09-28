import {test as base} from '@playwright/test'
import { PageManager } from '../pages/common/PageManager'

type MyFixture= {
    PManager : PageManager
}

export const test = base.extend<MyFixture>({
    PManager: async({page}, use)=> {
        const PM = new PageManager(page)
        await use(PM)
        // teardown section
        console.log("Execution Completed")
    }
});
