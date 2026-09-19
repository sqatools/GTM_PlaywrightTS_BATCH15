import test, { expect } from '@playwright/test'

test('Handle Window Alert in IFrame', async ({ page }) => {
  // Navigate to the page containing the iframe
  setTimeout(() => {}, 5000)
  await page.goto('https://sqatools.in/automation-practice-page/')
  await page.locator('#sampleIframe').waitFor()

  // Get the iframe element
  const iframeElement = page.frameLocator('#sampleIframe')
  const heading = iframeElement.getByRole('heading', { name: 'Example Domain' })

  // Wait for the heading to be visible
  //await expect(heading).toBeVisible()
setTimeout(() => {}, 5000)
    // Get the text content of the first paragraph inside the iframe
  const para = await iframeElement.locator('p').first().textContent()
  console.log(para)
})