This repo uses Page Object Model for Playwright TypeScript.

This repo is used to demonstrate storing authentication state

**Tech Stack**

Playwright & TypeScript

Test Runner - Playwright Test

Assertions - Playwright Test


**Steps to setup**

1) Clone the repo to local
2) Navigate to Playwright TypeScript directory
3) Run command ```npm ci``` to install dependancies
4) Run command ```npm run go ``` to run tests


**Storing authentication state**

This happens in before all hook through global-setup.ts

Login to app happens and cookies get saved in storage directory

Based on required user login, this gets loaded onto page before the test starts using ```test.use```
