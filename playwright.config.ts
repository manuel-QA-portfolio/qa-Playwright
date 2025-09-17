import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/swaglabs',
  retries: 1,
  reporter: [['html', { open: 'never' }], ['line']],
  fullyParallel: true, 
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'SauceDemo',
      testDir: './tests/swaglabs',
      use: {
        baseURL: 'https://www.saucedemo.com',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'TheInternet',
      testDir: './tests/theInternet',
      use: {
        baseURL: 'https://theinternet.io',
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
