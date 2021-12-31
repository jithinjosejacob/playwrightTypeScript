import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {

    globalSetup: require.resolve('./global-setup'),

    //reporter: [['list'], ['html']],

    // Global Teardown
    //globalTeardown: require.resolve(`./global-teardown`),

    // Sets timeout for each test case
    timeout: 120000,

    /* Parallel workers*/
    workers: 1,

    // Number of retries if test case fails
    retries: 0,

    reportSlowTests: null,

    projects: [
        {
            // Using Webkit /Nightly
            name: `Chrome`,
            use: {
                baseURL:'https://www.saucedemo.com/',
                browserName: 'chromium',
                channel:'chrome',
                headless: false,
                viewport: { width: 1500, height: 730 },
                ignoreHTTPSErrors: true,
                acceptDownloads: true,
                //screenshot: `only-on-failure`,
                //video: `retain-on-failure`,
                //trace: `retain-on-failure`,
                launchOptions: {
                    slowMo: 500
                }
            },
        },

        {
            // Using Webkit /Nightly
            name: `local`,
            use: {
                baseURL:'https://www.saucedemo.com/',
                browserName: 'chromium',
                channel:'chrome',
                viewport: { width: 1500, height: 730 },
                ignoreHTTPSErrors: true,
                acceptDownloads: true,
                screenshot: `only-on-failure`,
                video: `retain-on-failure`,
                trace: `retain-on-failure`,
                launchOptions: {
                    slowMo: 500
                }
            },
        },
    ],
};
export default config;
