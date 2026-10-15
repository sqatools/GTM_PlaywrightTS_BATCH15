# SauceDemo Comprehensive Test Plan

## Objective

Validate the customer-facing shopping journey at [SauceDemo](https://www.saucedemo.com/) using Playwright browser automation and Cucumber Gherkin scenarios. The application is treated as a sourceless system under test: checks use its public UI and visible outcomes, not application internals.

## Scope and assumptions

- The public demo is available at `https://www.saucedemo.com/`; override it with `BASE_URL` when required.
- Use only the demo's published test accounts. The automated baseline uses `standard_user` / `secret_sauce`; the locked-account scenario uses `locked_out_user`.
- Tests run against Chromium, create a fresh browser context per scenario, and do not change production or application data.
- This is functional UI coverage. It does not certify accessibility compliance, security, backend APIs, or production performance.
- The remote demo may be updated or rate-limited; transient service outages should be distinguished from product regressions.

## Test approach

| Area | Approach |
| --- | --- |
| Framework | Cucumber BDD with TypeScript step definitions and Playwright |
| Test isolation | New browser and context per scenario; no shared cart or cookies |
| Selectors | Stable `data-test` attributes where available; product cards scoped by product name |
| Assertions | User-visible state, item names, counts, sorting order, validation messages, and confirmation |
| Evidence | Cucumber HTML and Allure reports; failure screenshots are attached to both |
| Browser baseline | Chromium desktop at 1280 x 800 |
| Priorities | `@smoke` for critical journey checks; `@regression` for broader functional checks |

## Coverage matrix

| ID | Priority | Feature / scenario | Expected result |
| --- | --- | --- | --- |
| AUTH-01 | P0 | Sign in as standard user | Product catalog loads with six products |
| AUTH-02 | P1 | Incorrect password | Authentication error is displayed; catalog remains inaccessible |
| AUTH-03 | P1 | Locked-out user | Locked-account message is displayed |
| AUTH-04 | P1 | Missing username or password | Relevant required-field validation is displayed |
| INV-01 | P0 | Display catalog | Six product cards are visible |
| INV-02 | P1 | Sort by price ascending | Product prices are in nondecreasing order |
| INV-03 | P1 | Sort by name descending | Product names are in descending alphabetical order |
| CART-01 | P0 | Add product | Cart badge increments and cart displays the selected product |
| CART-02 | P1 | Remove product | Selected product disappears and the cart is empty |
| CART-03 | P1 | Continue shopping from empty cart | Catalog is displayed |
| CHK-01 | P0 | Complete checkout | Product is summarized and order confirmation is displayed |
| CHK-02 | P1 | Missing first name, last name, or postal code | The corresponding required-field error is displayed |
| SESS-01 | P0 | Sign out | Login form is displayed |
| SESS-02 | P1 | Reset application state | Cart badge is cleared |

## Test data

| Purpose | Username | Password / data |
| --- | --- | --- |
| Standard purchase flow | `standard_user` | `secret_sauce` |
| Locked account behavior | `locked_out_user` | `secret_sauce` |
| Invalid login | `standard_user` | `wrong_password` |
| Checkout happy path | — | First name `Ada`, last name `Lovelace`, postal code `12345` |
| Product used for cart and checkout | — | `Sauce Labs Backpack` |

## Execution

From this directory:

```sh
npm install
npx playwright install chromium
npm test
npm run test:smoke
npm run test:regression
npm run test:allure
npm run typecheck
```

`npm test`, `npm run test:smoke`, and `npm run test:regression` write Allure result data to `reports/allure-results` alongside the Cucumber HTML report at `reports/cucumber.html`. Run `npm run allure:generate` to build the browsable Allure report at `reports/allure-report`; `npm run test:allure` runs the full suite and generates that report in one command. Use `npm run allure:open` to open a generated report. Failed-scenario screenshots are attached to the reports.

To target another compatible deployment, set `BASE_URL` before running Cucumber. Set `HEADLESS=false` to show the browser during local debugging.

## Entry, exit, and triage

- **Entry:** Dependencies installed, Chromium available, and the target URL reachable.
- **Exit:** All P0 scenarios pass; P1 failures are triaged with report evidence. No test should be marked passed when navigation or a required element fails.
- **Triage:** Check the target site's availability, the failing step and screenshot, then reproduce the same tagged scenario before classifying a defect.

## Known limitations and future coverage

- The suite currently targets desktop Chromium; Firefox/WebKit and responsive layouts can be added after establishing a stable cross-browser baseline.
- The public demo is not a controlled test environment, so availability, latency, and content can change independently of this suite.
- Additional regression candidates include all sort directions, all product add/remove combinations, checkout cancel/back navigation, price/tax totals, direct-route access, keyboard accessibility, and the demo's other published user personas.
