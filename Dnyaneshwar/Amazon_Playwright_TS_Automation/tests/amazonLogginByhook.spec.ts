import { expect, test } from '../fixture/BaseFixture';
import { testData } from '../testdata/testdata';

test.describe("amazon automation", () => {

    test.setTimeout(60000);

    test.beforeEach(async ({ pageManager }) => {

        console.log("STEP 1: Navigate");

        await pageManager.LoginPage.navigate(
            testData.amazon.url
        );

        console.log("STEP 2: Hover Account");

        await pageManager.LoginPage.hoverAccountAndLists();

        console.log("STEP 3: Click Sign In");

        await pageManager.LoginPage.clickSignIn();

        console.log("STEP 4: Enter Username");

        await pageManager.LoginPage.enterUsername(
            testData.amazon.username
        );

        console.log("STEP 5: Click Continue");

        await pageManager.LoginPage.clickContinue();

        console.log("STEP 6: Enter Password");

        await pageManager.LoginPage.enterPassword(
            testData.amazon.password
        );

        console.log("STEP 7: Click Sign In");

        await pageManager.LoginPage.ClickSignIn();
    });


    test("Verify Product Name", async ({ pageManager }) => {

        await pageManager.HomePage.searchProduct(
            testData.amazon.product
        );

        await pageManager.HomePage.ClickToSearch();

        const productName =
            await pageManager.HomePage.getProductName(
                testData.amazon.expectedProductName
            );

        console.log("Product Name:", productName);

        await expect(productName).toContain(
            testData.amazon.expectedProductName
        );
    });

});