import type { Page } from "playwright";

export class OpenHRMPage {
  readonly page: Page
  constructor(page: Page) {
    this.page = page;
  }
  
  async login (username: string, password: string): Promise<any> {
            await this.page.locator('[name="username"]').fill(username);
            await this.page.locator('[name="password"]').fill(password);
            await this.page.locator('[type="submit"]').click();

    };
 }
