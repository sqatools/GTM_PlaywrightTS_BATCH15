import { test as base } from '@playwright/test';

type MyFixture = {
    userdata: {
        username: string;
        password: string;
    };
};

export const test = base.extend<MyFixture>({

    userdata: async ({}, use) => {

        const userdata = {
            username: "john",
            password: "test@123"
        };

        await use(userdata);
    }
});