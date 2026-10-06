import { test } from '../fixture/BaseFixture';
import { PageManager } from '../pages/common/PageManager';
import { testData } from '../testdata/testdata';

test.describe("amazon automation", () => {

    test('Amazon Login', async ({ pageManager }) => {

        await pageManager.LoginPage.navigate(testData.amazon.url);

        await pageManager.LoginPage.hoverAccountAndLists();

        await pageManager.LoginPage.clickSignIn();

        await pageManager.LoginPage.enterUsername(
            testData.amazon.username
        );

        await pageManager.LoginPage.clickContinue();

        await pageManager.LoginPage.enterPassword(
            testData.amazon.password
        );

        await pageManager.LoginPage.ClickSignIn();

    });

    test("search Product", async ({ pageManager }) => {

    await pageManager.HomePage.searchProduct(testData.amazon.product);
    await pageManager.HomePage.ClickToSearch();

});



});