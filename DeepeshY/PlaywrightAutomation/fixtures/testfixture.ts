import { test as base } from '@playwright/test';

type MyFixtures = {
    userdata: any;
};

export const test = base.extend<MyFixtures>({
    userdata: async ({}, use:any) => {
        const data = {username: "john", password: 'test@12345'}
        await use(data);
    }
});