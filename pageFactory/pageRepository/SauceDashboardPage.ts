import { MasterPage } from './MasterPage'
import { SauceDashboardObjects } from '../objectRepository/SauceDashboardObjects'

export class SauceDashboardPage extends MasterPage {
  // constructor (page: Page, request:APIRequestContext, context: BrowserContext) {
  //   super(page, request, context)
  // }

    sauceDashboardObjects = new SauceDashboardObjects()

    async loginToAdmin () {
      const user = this.page.locator(this.sauceDashboardObjects.USERNAME_EDITBOX_ID)
      await user.fill('standard_user')
      const pass = this.page.locator(this.sauceDashboardObjects.PASSWORD_EDITBOX_ID)
      await pass.fill('secret_sauce')
      await this.page.click(this.sauceDashboardObjects.LOGIN_BUTTON_ID)
      await this.page.waitForLoadState()
    }
}
