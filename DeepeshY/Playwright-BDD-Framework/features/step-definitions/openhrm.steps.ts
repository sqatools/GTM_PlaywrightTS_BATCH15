import { Given, Then, When , } from "@cucumber/cucumber";
import { strict as assert } from "node:assert";
const password = "admin123";
import {OpenHRMPage} from "../../src/pages/openhrm";
import { SauceDemoWorld } from "../support/world";

Given("I am on the OrangeHRM login page", async function (this: SauceDemoWorld) {
  assert.match(this.page.url(), /OrangeHRM\.com/);
  await this.page.getByRole('button', {name: " Login "}).waitFor({state: "visible"});
});

When(
  "I sign in as {string} with password {string}",
  async function (this: SauceDemoWorld, username: string, userPassword: string) {
    await new OpenHRMPage(this.page).login(username, userPassword);
  }
);

Then( "I should see the OrangeHRM dashboard", async function (this: SauceDemoWorld) {
  await this.page.getByRole('heading', {name: "Dashboard"}).waitFor({state: "visible"});
  }
);
