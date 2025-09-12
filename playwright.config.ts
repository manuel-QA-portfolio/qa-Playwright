import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/swaglabs',
  retries: 1,
  reporter: [['html', { open: 'never' }], ['line']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
