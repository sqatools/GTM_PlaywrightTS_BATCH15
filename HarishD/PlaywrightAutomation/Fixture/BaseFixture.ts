import { test as base } from '@playwright/test';
import { PageManager } from '../Pages/Common/PageManager';

type MyFixtures = {
    pageM: PageManager;
};

export const test = base.extend<MyFixtures>({
    pageM: async ({ page }, use) => {
        await use(new PageManager(page));
    },
});