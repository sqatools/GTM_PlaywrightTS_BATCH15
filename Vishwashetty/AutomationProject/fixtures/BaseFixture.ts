import {test as base} from '@playwright/test'
import {PageManager} from '../Pages/common/pageManager'

type MyFixtures = {
    PManager: PageManager
}

export const test = base.extend<MyFixtures>({
    PManager: async ({ page }, use) => {
        const PM = new PageManager(page)
        await use(PM)
        // teardown section
        console.log('execution completed    ')
    }
})