import { test as base } from '@playwright/test';

type MyFixtures = {
    UserData: any;
};

export const test = base.extend<MyFixtures>({
    UserData: async ({},use :any) => {
        var UserData ={Username :'John',Password :'User@1234'}
        await use(UserData);
    },
});