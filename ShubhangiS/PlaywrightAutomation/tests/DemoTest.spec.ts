import { test, expect } from '@playwright/test';

test.describe('Demo Test',async() => {
  test('Add products to cart', async ({ page }) => {
    await page.goto("https://automationexercise.com/")



  })
})
