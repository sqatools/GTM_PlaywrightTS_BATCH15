import { test, expect, type BrowserContext, type Page } from '@playwright/test';


let context: BrowserContext;
let page: Page;

test.describe("Test case execution", () => {
  test.beforeAll("Login to website", async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  });

  test.beforeEach("Navigate to dashboard", async () => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  });

  test.afterEach("Get current url", async () => {
    console.log(page.url());
  });

  test.afterAll("Logout from the website", async () => {
    try {
      await page.getByAltText("profile picture").click();
      await page.getByRole("menuitem", { name: "Logout" }).click();
    } finally {
      await context.close();
    }
  });

  test("Navigate to admin page", async () => {
    await page.getByRole("link", { name: "Admin" }).click();
    await expect(page.getByRole("heading", { name: "User Management" })).toBeVisible();
  });

  test("Navigate to PIM page and verify", async () => {
    await page.getByRole("link", { name: "PIM" }).click();
    await expect(page.getByRole("heading", { name: "PIM" })).toBeVisible();
  });

  test("Navigate to Performance page", async () => {
    await page.getByRole("link", { name: "Performance" }).click();
    await expect(page.getByRole("heading", { name: "Performance" })).toBeVisible();
  });
});