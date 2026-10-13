# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright_hookswith_feature.spec.ts >> Test case execution >> Navigate to PIM page and verify
- Location: playwright_hookswith_feature.spec.ts:39:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'PIM' })
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```
Error: "context" and "page" fixtures are not supported in "afterAll" since they are created on a per-test basis.
If you would like to reuse a single page between tests, create context manually with browser.newContext(). See https://aka.ms/playwright/reuse-page for details.
If you would like to configure your page before each test, do that in beforeEach hook instead.
```