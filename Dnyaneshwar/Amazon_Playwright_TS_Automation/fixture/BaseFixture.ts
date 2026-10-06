import { test as base } from '@playwright/test';
import { PageManager } from '../pages/common/PageManager';
export { expect } from '@playwright/test';

type MyFixtures = {
    pageManager: PageManager;
};

export const test = base.extend<MyFixtures>({
    pageManager: async ({ page }, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    }
});

