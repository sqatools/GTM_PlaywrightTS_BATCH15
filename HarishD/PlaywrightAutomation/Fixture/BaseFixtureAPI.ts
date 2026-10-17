import { test as base } from '@playwright/test';
import {APIPAGEMANAGER} from '../API_FRAMWORK/Common/api_pagemanager'

type MyFixtures = {
    APIPAGEM: APIPAGEMANAGER;
    UserData :any
};

export const test = base.extend<MyFixtures>({
        // fixture 1: it will provide PageManager Object
    APIPAGEM: async ({ request }, use) => {
        await use(new APIPAGEMANAGER(request));
    },
});