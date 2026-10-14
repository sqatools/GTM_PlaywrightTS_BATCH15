import { World, setWorldConstructor } from "@cucumber/cucumber";
import type { Browser, BrowserContext, Page } from "playwright";

export class SauceDemoWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
}

setWorldConstructor(SauceDemoWorld);
