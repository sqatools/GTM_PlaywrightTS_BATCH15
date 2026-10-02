import { test as base } from '@playwright/test';
import { APIPageManager } from '../api/common/apiPageManager';
import  JsonData  from '../testdata/testdata.json'

type MyFixtures = {
    apiPageM: APIPageManager;
    UserData: any
};

export const test = base.extend<MyFixtures>({
    // fixture 1: it will provide PageManager Object
    apiPageM: async ({ request }, use) => {
        await use(new APIPageManager(request));
    },

    // Fixture2 : It will provide object (JSON) data in test cases
    UserData: async({}, use:any) => {
        const data:any = JsonData
        await use(data)
    }
});