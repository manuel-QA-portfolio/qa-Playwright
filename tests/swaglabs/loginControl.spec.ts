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

    test('Locked user is not able to perform login', async ({ page }) => {
        const loginFile = new LoginFile(page);
        await loginFile.open();
        await loginFile.login('locked_out_user', 'secret_sauce');
        await loginFile.lockedUserMessage();
    })

    test('Non existent user cannot login', async ({ page }) => {
        const loginFile = new LoginFile(page);
        await loginFile.open();
        await loginFile.login('problem_user', '_sauce');
        await loginFile.nonExistentUserLoggedIn();
    })

    test('User is able to login after error', async ({ page }) => {
        const loginFile = new LoginFile(page);
        await loginFile.open();
        await loginFile.login('problem_user', '_sauce');
        await loginFile.nonExistentUserLoggedIn();
        await loginFile.closeErrorButton();
        await loginFile.login('visual_user', 'secret_sauce');

    })
})
