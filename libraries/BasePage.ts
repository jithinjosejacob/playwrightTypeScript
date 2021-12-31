import { test as baseTest } from '@playwright/test'
import { SauceLoginPage } from '../pageFactory/pageRepository/SauceLoginPage'
import { SauceDashboardPage } from '../pageFactory/pageRepository/SauceDashboardPage'

const test = baseTest.extend<{
    sauceLoginPage: SauceLoginPage;
    sauceDashboardPage: SauceDashboardPage;
}>({
  sauceLoginPage: async ({ page, request, context }, use) => {
    await use(new SauceLoginPage(page, request, context))
  },
  sauceDashboardPage: async ({ page, request, context }, use) => {
    await use(new SauceDashboardPage(page, request, context))
  }
})

export default test
