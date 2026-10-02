//Page Fixture >Page> BasePAGE> LoginPageLocator> LoginPage>Test
   
//A fixture is something that provides the required setup or data to a test.

import {test as base} from '@playwright/test'
import { pagemanager } from '../pages/common/PageManager.ts'

type MyFixture= {
    PManager : pagemanager
}

export const test = base.extend<MyFixture>({
    PManager: async({page}, use)=> {
        const PM = new pagemanager(page)
        await use(PM)
        // teardown section
        console.log("Execution Completed")
    }
});
