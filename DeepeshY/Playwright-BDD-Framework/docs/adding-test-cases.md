# Beginner's Guide: Adding Test Cases

This guide explains how to add and run tests in this Playwright + Cucumber + TypeScript framework. It uses examples from the SauceDemo shopping website and assumes you are new to BDD.

## 1. What happens when a test runs?

A test in this framework has three main parts:

1. A **feature file** describes the test in plain-language steps.
2. A **step definition** connects each step to TypeScript code.
3. A **page object** contains reusable browser actions and page details.

The path looks like this:

```text
Feature scenario -> Step definition -> Page object -> SauceDemo website
```

Cucumber reads the scenario, Playwright controls the browser, and the step definitions check whether the expected result happened.

## 2. Get the project ready

Open a terminal in the `Playwright-BDD-Framework` folder. Install the project packages and the Chromium browser:

```sh
npm install
npx playwright install chromium
```

You need Node.js and npm installed. To check whether they are available:

```sh
node --version
npm --version
```

## 3. Find the files you will use

| Folder or file | What it is for |
| --- | --- |
| `features/` | Gherkin feature files containing scenarios |
| `features/step-definitions/sauce-demo.steps.ts` | TypeScript code for Given/When/Then steps |
| `features/support/hooks.ts` | Starts and closes the browser for each scenario |
| `features/support/world.ts` | Makes the browser page available to step definitions |
| `src/pages/` | Page objects containing reusable browser actions |
| `cucumber.js` | Cucumber configuration, including Cucumber HTML and Allure result output |
| `reports/` | Generated test reports and test evidence |

Put a new scenario in the feature file for the area you are testing. For example, login tests belong in `features/login.feature`, shopping-cart tests belong in `features/inventory-cart.feature`, and checkout tests belong in `features/checkout.feature`.

## 4. Learn the three Gherkin words

Gherkin is the plain-language format used in feature files:

- **Given** sets up the starting situation.
- **When** describes an action.
- **Then** describes what the test should check.
- **And** continues the previous kind of step.

For example:

```gherkin
Scenario: Add a backpack to the cart
  Given I am signed in as "standard_user"
  When I add "Sauce Labs Backpack" to the cart
  Then the cart badge should show 1 item
```

Read it like a short story: sign in, add a product, and check the cart badge.

## 5. First example: add a scenario using steps that already exist

Before writing new code, look in `features/step-definitions/sauce-demo.steps.ts` for matching step text. Reusing an existing step is the easiest way to add a test.

For example, the framework already has these steps:

```gherkin
Given I am signed in as "standard_user"
When I add "Sauce Labs Backpack" to the cart
Then the cart badge should show 1 item
```

Add this scenario to `features/inventory-cart.feature`:

```gherkin
  @regression
  Scenario: Cart badge is hidden when the cart is empty
    Then the cart badge should not be visible
```

The feature's `Background` already signs the shopper in, and the step for checking that the badge is hidden already exists. You do not need to add TypeScript code for this scenario.

The `@regression` tag labels the scenario as a regression test. The project also uses `@smoke` for important, quick checks.

## 6. Second example: add a new test and its step definition

Use this example when no existing `Then` step checks the result you need. The inventory page object already supports sorting by `"Price (high to low)"` and reading product prices. We will add a step that checks the prices are in descending order.

### 6.1 Add the scenario to the feature file

Append this scenario to `features/inventory-cart.feature`:

```gherkin
  @regression
  Scenario: Sort products by price from high to low
    When I sort products by "Price (high to low)"
    Then products should be sorted by price in descending order
```

The feature's `Background` already signs the shopper in before each scenario, so this scenario does not need its own sign-in step.

### 6.2 Add a step definition

Open `features/step-definitions/sauce-demo.steps.ts`. Near the existing step that checks ascending prices, add:

```ts
Then("products should be sorted by price in descending order", async function (this: SauceDemoWorld) {
  const prices = await new InventoryPage(this.page).productPrices();
  assert.deepEqual(prices, [...prices].sort((first, second) => second - first));
});
```

The file already imports `Then`, `assert`, `InventoryPage`, and `SauceDemoWorld`, so you can use them directly. The step reads the prices and compares them with a copy sorted from highest to lowest.

The `When` step for `"I sort products by {string}"` is already implemented. It passes the text inside the quotes to the inventory page object, which already recognizes `"Price (high to low)"`.

### 6.3 Run the new scenario by itself

From the project folder, run:

```sh
npx cucumber-js features/inventory-cart.feature --name "Sort products by price from high to low"
```

The scenario name after `--name` must match the name in the feature file.

## 7. When a new browser action is needed

Keep browser selectors and actions in the appropriate page object in `src/pages/`. Step definitions should describe the test behavior and call page-object methods, instead of filling up with raw selectors.

For example, `src/pages/inventory-page.ts` has a method for adding a named product:

```ts
async addProduct(name: string): Promise<void> {
  await this.product(name).locator("button").click();
}
```

The step definition calls that method:

```ts
When("I add {string} to the cart", async function (this: SauceDemoWorld, name: string) {
  await new InventoryPage(this.page).addProduct(name);
});
```

When adding a completely new action:

1. Add a method to the relevant page object.
2. Add a matching Given, When, or Then definition in `sauce-demo.steps.ts`.
3. Use that exact step wording in your feature scenario.
4. Run the scenario and confirm the page object action and expected result work.

Use the existing page objects and the website's `data-test` selectors as examples. Give new step definitions different wording from existing ones; duplicate matching steps can make Cucumber report an ambiguous step.

## 8. Use Scenario Outline for several similar cases

A **Scenario Outline** runs the same test with several sets of example data. The login feature uses one to check missing usernames and passwords:

```gherkin
  @regression
  Scenario Outline: Require both login credentials
    Given I am on the SauceDemo login page
    When I submit the login form with username "<username>" and password "<password>"
    Then I should see the login error "<message>"

    Examples:
      | username      | password     | message              |
      |               | secret_sauce | Username is required |
      | standard_user |              | Password is required |
```

Each row under `Examples` becomes a separate test run. Use this when you need to check the same behavior with different inputs.

## 9. Run tests

Run every scenario:

```sh
npm test
```

Run only scenarios tagged `@smoke`:

```sh
npm run test:smoke
```

Run only scenarios tagged `@regression`:

```sh
npm run test:regression
```

Check the TypeScript code:

```sh
npm run typecheck
```

Run the full suite and generate the Allure report when the test run succeeds:

```sh
npm run test:allure
```

## 10. Read the reports

The test run writes:

- Cucumber HTML report: `reports/cucumber.html`
- Allure result files: `reports/allure-results/`
- Allure HTML report (after generation): `reports/allure-report/`

To build the Allure HTML report separately:

```sh
npm run allure:generate
```

To open the generated report:

```sh
npm run allure:open
```

The framework automatically takes and attaches a full-page screenshot when a scenario fails. Check the failed step, its error message, and the screenshot to help find the problem.

## 11. Optional: change the website address or show the browser

By default, tests use `https://www.saucedemo.com/` and run the browser in headless mode (the browser window is hidden).

In PowerShell, set a different compatible website address for a run like this:

```powershell
$env:BASE_URL = "https://www.saucedemo.com/"
npm test
```

To show the browser window while debugging:

```powershell
$env:HEADLESS = "false"
npm test
```

Close the terminal or clear the environment variable when you want to return to the defaults:

```powershell
Remove-Item Env:HEADLESS
Remove-Item Env:BASE_URL
```

## 12. Common problems

| What you see | What to check |
| --- | --- |
| `Undefined step` | Check that the step text in the feature file matches a definition in `sauce-demo.steps.ts`. |
| `Ambiguous step` | Check for two step definitions that match the same feature text. Rename or reuse the existing step. |
| Browser executable is missing | Run `npx playwright install chromium`. |
| A scenario fails on an assertion | Check the expected value, the current website behavior, the error message, and the attached screenshot. |
| The Allure report does not show the latest run | Run the test again, then run `npm run allure:generate`. |
| The website cannot be opened | Check your network connection and the `BASE_URL` value. |

## 13. Before you finish

- Give the scenario a clear name that describes the behavior.
- Check whether suitable step definitions already exist before adding new ones.
- Put scenarios in the feature file for the behavior being tested.
- Use `@smoke` or `@regression` to categorize the test.
- Keep browser operations in page objects where practical.
- Run the scenario, then run `npm run typecheck` if you changed TypeScript.
- Check the report and any failure screenshot if the scenario does not pass.
