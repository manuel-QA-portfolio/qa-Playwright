import { test as base } from '@playwright/test';
import { PageObjectManager } from '../../../src/core/PageObjectManager'

type Fixtures = { pomManager: PageObjectManager };

export const test = base.extend<Fixtures>({
  pomManager: async ({ page }, use) => {
    const pomManager = new PageObjectManager(page);
    await use(pomManager);
  },
});

export { expect } from '@playwright/test';
