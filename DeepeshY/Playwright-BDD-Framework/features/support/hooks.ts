import { After, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { SauceDemoWorld } from "./world";

const baseUrl = process.env.BASE_URL ?? "https://www.saucedemo.com/";

setDefaultTimeout(30_000);

Before(async function (this: SauceDemoWorld) {
  this.browser = await chromium.launch({
    headless: process.env.HEADLESS !== "false"
  });
  this.context = await this.browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  this.page = await this.context.newPage();
  await this.page.goto(baseUrl);
});

After(async function (this: SauceDemoWorld, { result }) {
  if (result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, "image/png");
  }

  await this.context?.close();
  await this.browser?.close();
});
