# Swag Labs Cucumber Automation Test Plan

## 1. Objective

Validate the key shopper journeys on [Swag Labs](https://www.saucedemo.com/) through readable Cucumber scenarios backed by Playwright browser automation. The suite checks authentication, catalog browsing, cart operations, checkout, and session controls.

## 2. Scope

### In scope

- Authentication with valid, invalid, locked, and missing credentials.
- Catalog availability, all four sort orders, and product details.
- Adding multiple products, cart contents and badge count, item removal, and continue-shopping navigation.
- Checkout required-field validation, order summary arithmetic, successful order confirmation, and cancel navigation.
- Sign-out and resetting the application/cart state.
- Chromium execution with isolated browser context per scenario and screenshots attached to failed scenarios.

### Out of scope

- Payment processing and any real order fulfilment (the public demo does not place production orders).
- Cross-browser/device certification, load/performance testing, accessibility conformance, security testing, and backend/API contract testing.
- Defects unique to special demo accounts (for example, visual glitches in `problem_user`) beyond the shared login behavior.

## 3. Test environment and data

| Item | Value |
|---|---|
| Application | `https://www.saucedemo.com/` |
| Browser | Playwright Chromium, headless by default |
| Standard credentials | `standard_user` / `secret_sauce` |
| Locked credentials | `locked_out_user` / `secret_sauce` |
| Invalid credentials | `standard_user` / `wrong_password` |
| Test isolation | New browser, context, and page for every scenario |
| Overrides | `BASE_URL` changes the application URL; `HEADLESS=false` enables headed execution |

The public demo is shared and may change independently of this suite. Use only its published demo accounts and avoid depending on persistent server-side state.

## 4. Scenario coverage

| Area | Scenario coverage | Priority |
|---|---|---|
| Authentication | Valid sign-in, invalid password, locked account, required username, required password | Smoke + regression |
| Catalog | Six products displayed; name A-Z/Z-A and price low-high/high-low sorting; open product details | Smoke + regression |
| Cart | Add two products; verify badge and contents; remove one of multiple items; continue shopping | Smoke + regression |
| Checkout | Complete order and verify confirmation; validate first name, last name, and postal code; confirm subtotal + tax = total; cancel and return to catalog | Smoke + regression |
| Session | Sign out; reset cart/application state from menu | Smoke + regression |

## 5. Execution approach

- Cucumber `.feature` files hold business-readable Given/When/Then scenarios; shared typed step definitions delegate UI behavior to page objects.
- `@smoke` selects a quick end-to-end confidence set; `@regression` selects validation and broader functional coverage.
- Hooks launch and close an isolated Chromium session around each scenario. Failed scenarios attach a full-page screenshot.
- Assertions verify visible outcomes and computed values, not only button clicks or navigation actions.

## 6. Entry and exit criteria

**Entry:** Node.js/npm are available, dependencies are installed, and the Swag Labs demo is reachable.

**Exit:** All selected scenarios pass, TypeScript type-checking passes, and any failures have been reviewed with their attached screenshots. A failure caused by demo availability or an external site change is reported distinctly from an application assertion failure.

## 7. Running the suite

```sh
npm install
npx playwright install chromium
npm run typecheck
npm test
npm run test:smoke
npm run test:regression
npm run test:allure
```

`npm run test:allure` runs the full suite, writes raw Allure results to `allure-results/`, and generates the HTML report in `allure-report/`. Run `npm run report:allure` to regenerate the report from existing results, or `npm run open:allure` to serve and open it.

Set `BASE_URL` or `HEADLESS` in the shell environment when running against a compatible deployment or when debugging with a visible browser.
