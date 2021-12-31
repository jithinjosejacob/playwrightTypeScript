import type { Page } from 'playwright'

export class WebActions {
    readonly page: Page;

    constructor (page: Page) {
      this.page = page
    }

    // Navigate to a specific url.
    async navigateToURL (url: string) {
      await this.page.goto(url)
      await this.page.waitForLoadState()
      await this.page.waitForTimeout(5000)
    }

    // Click on a specific menu item in shopify admin .
    async clickMenuItem (locator: string) {
      await this.page.click(locator)
      await this.page.waitForNavigation({ waitUntil: 'networkidle' })
    }
}
