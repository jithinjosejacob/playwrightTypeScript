import test from '../libraries/BasePage'

test.describe.parallel('Standard User tests', () => {
  test.use({ storageState: './storage/standard.json' })
  test('TC001-Sauce Standard Navigation Test.', async ({ sauceLoginPage, baseURL }, testInfo) => {
    console.log('Test Execution Starts')
    await test.step('Test Cookies', async () => {
      await sauceLoginPage.navigateToURL('https://react-redux.realworld.io/#/settings')
    })

    await test.step('Navigate to Sauce Page', async () => {
      await sauceLoginPage.navigateToURL(baseURL)
      await sauceLoginPage.loginToAdmin()
    })

    await test.step('Scroll to Bottom', async () => {
      await sauceLoginPage.scrollToPageBottom()
    })

    await test.step('Open New tab', async () => {
      await sauceLoginPage.openNewTab()
    })
  })
})
