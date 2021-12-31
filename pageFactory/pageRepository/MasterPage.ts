import { APIRequestContext, BrowserContext, Page } from '@playwright/test'

export class MasterPage {
  readonly page: Page;
  readonly request: APIRequestContext
  readonly context: BrowserContext

  constructor (page: Page, request: APIRequestContext, context: BrowserContext) {
    this.page = page
    this.request = request
    this.context = context
  }

  // Get specific header text.
  async getHeaderText (headerType: string) {
    const headerValue = await this.page.innerText(`${headerType}`)
    return headerValue
  }

  // Get title of the page.
  async getTitle () {
    const titleValue = await this.page.title()
    return titleValue
  }

  // Scroll to Page Botton
  async scrollToPageBottom () {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  }
}
