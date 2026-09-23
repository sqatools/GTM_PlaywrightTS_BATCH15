import { test as base } from '@playwright/test';
import { PageManager } from '../pages/common/pageManager.ts';
import  JsonData  from '../testdata/testdata.json'

type MyFixtures = {
    pageM: PageManager;
    UserData: any
};

export const test = base.extend<MyFixtures>({
    // fixture 1: it will provide PageManager Object
    pageM: async ({ page }, use) => {
        await use(new PageManager(page));
    },

    // Fixture2 : It will provide object (JSON) data in test cases
    UserData: async({}, use:any) => {
        const data:any = JsonData
        await use(data)
    }
});