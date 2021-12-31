import { APIRequestContext, BrowserContext, Page } from '@playwright/test'
import { WebActions } from '../../libraries/WebActions'
import { MasterPage } from './MasterPage'
import { SauceLoginObjects } from '../objectRepository/SauceLoginObjects'

let webActions: WebActions

export class SauceLoginPage extends MasterPage {
  constructor (page: Page, request:APIRequestContext, context: BrowserContext) {
    super(page, request, context)
    webActions = new WebActions(this.page)
  }

  sauceLoginObjects = new SauceLoginObjects()

  // Navigate to URL.
  async navigateToURL (baseURL: any) {
    await webActions.navigateToURL(baseURL)
  }

  // Login to Admin.
  /* Locator API is user.
      strict by default
      refetches the locator if dom refreshes
      stale element exception can be avoided.
  */
  async loginToAdmin () {
    const user = this.page.locator(this.sauceLoginObjects.USERNAME_EDITBOX_ID)
    await user.fill('standard_user')
    const pass = this.page.locator(this.sauceLoginObjects.PASSWORD_EDITBOX_ID)
    await pass.fill('secret_sauce')
    await this.page.click(this.sauceLoginObjects.LOGIN_BUTTON_ID)
    await this.page.waitForLoadState()
  }

  // Open New Tab.
  async openNewTab () {
    const [newPage] = await Promise.all([
      this.context.waitForEvent('page'),
      this.page.click('//a[contains(text(),\'LinkedIn\')]') // Opens a new tab
    ])
    await newPage.waitForLoadState()
    console.log(await newPage.title())
  }
}
