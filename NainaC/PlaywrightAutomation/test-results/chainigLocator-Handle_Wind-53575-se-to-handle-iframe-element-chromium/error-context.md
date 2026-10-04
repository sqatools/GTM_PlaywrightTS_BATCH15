# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chainigLocator\Handle_Window_Alert_iFrame\Handle_iframe_elements.spec.ts >> Handle Iframe  >> Test case to handle iframe element
- Location: NainaC\PlaywrightAutomation\tests\chainigLocator\Handle_Window_Alert_iFrame\Handle_iframe_elements.spec.ts:4:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://sqatools.in/automation-practice-page/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.describe("Handle Iframe ",async()=>{
  4  |     test("Test case to handle iframe element", async({page})=>{
> 5  |         await page.goto("https://sqatools.in/automation-practice-page/")
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  6  | 
  7  |         const IFrameelement = page.frameLocator("#sampleIframe")
  8  |        // const heading = await IFrameelement.getByRole("heading").textContent()
  9  |         const heading = IFrameelement.getByRole("heading", {name : 'Example Domain'})
  10 |          await expect(heading).toBeVisible()
  11 |         console.log(heading)
  12 |         const para = await IFrameelement.locator("p").first().textContent()
  13 |         console.log(para)
  14 |     })
  15 | }) 
```