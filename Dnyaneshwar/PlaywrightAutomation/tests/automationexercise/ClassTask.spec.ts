import { test, expect } from '@playwright/test';

test.describe("Create User", () => {

  test("fill the form", async ({ page }) => {
    test.setTimeout(60000);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(5_000);
    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole("button", { name: 'Login' }).click();

    await page.locator("ul.oxd-main-menu span.oxd-text").first().click();

    await page.getByRole("button", { name: 'Add' }).click();


    const userRole = page.locator(".oxd-select-text").first();

    await userRole.click();

    await page.locator(".oxd-select-option").filter
      ({
        hasText: "Admin"
      }).click();

    //await page.getByPlaceholder("Type for hints...").fill("Dnyaneshwar");

    const employee = page.getByPlaceholder("Type for hints...");

    await employee.fill("As");

    const suggestion = page.locator(".oxd-autocomplete-option")
      .filter({
        hasText: "Rasheed Arden Ankunding"
      });

    await suggestion.click();


    const status = page.locator(".oxd-input-group").filter({
      hasText: "Status"
    });

    await status.locator(".oxd-select-text").click();

    await page.locator(".oxd-select-option")
      .filter({ hasText: "Enabled" })
      .click();


    await page.locator("input.oxd-input").nth(1).fill("Dnyaneshwar");

    await page.locator("input.oxd-input").nth(2).fill("Dnyaneshwar123");
    await page.locator("input.oxd-input").nth(3).fill("Dnyaneshwar123");

    await page.getByRole("button", { name: 'Save' }).click()

  })


  test("Edit the User", async ({ page }) => {

    test.setTimeout(60000);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(5_000);
    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole("button", { name: 'Login' }).click();

    await page.locator("ul.oxd-main-menu span.oxd-text").first().click();

    const userCard = page.locator(".oxd-table-card").filter({
      hasText: "Dnyaneshwar"
    })

    await userCard.locator(".bi-pencil-fill").click();

  })

  test("get All User Details", async ({ page }) => {

    test.setTimeout(60000);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(5_000);
    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole("button", { name: 'Login' }).click();

    await page.locator("ul.oxd-main-menu span.oxd-text").first().click();

    const userCards = page.locator(".oxd-table-card");

    await userCards.first().waitFor();

    const users = await userCards.all();

    console.log("Total users:", users.length);

    for (const user of users) {
      console.log("-----------------------------");
      console.log(await user.textContent());
    }


  })

})
