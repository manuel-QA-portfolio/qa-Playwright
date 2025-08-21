import { test, expect } from '@playwright/test';
import { LoginFile } from '../../src/pages/swag/LoginFile';


test.describe('Login control', () => {

    test('Access', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByText('Swag Labs')).toBeVisible();
    })

    test('Login successful', async ({ page }) => {
        const loginFile = new LoginFile(page);
        await loginFile.open();
        await loginFile.login('standard_user', 'secret_sauce');
    })

})
