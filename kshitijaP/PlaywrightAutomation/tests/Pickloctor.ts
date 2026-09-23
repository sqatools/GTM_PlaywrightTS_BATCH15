import {test} from '@playwright/test'

test("add to cart", async ({ page }) => {
  await page.goto("https://automationexercise.com/login#google_vignette")
});