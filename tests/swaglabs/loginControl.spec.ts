import { test, expect } from '../swaglabs/fixtures/pomManager.fixture';


test.describe('Login control', { tag: '@login' }, () => {
    test('Access', async ({ pomManager }) => {
        await pomManager.loginPage.open();
        await expect(pomManager.pageInstance.getByText('Swag Labs')).toBeVisible();
    })

    test('Login successful', async ({ pomManager }) => {
        await pomManager.loginPage.successfulLogin();
        await expect(pomManager.pageInstance.getByText('Products')).toBeVisible();
    })

    test('Locked user is not able to perform login', async ({ pomManager }) => {
        await pomManager.loginPage.login('locked_out_user', 'secret_sauce');
        await pomManager.loginPage.expectedLockedMessage();
    })

    test('Non existent user cannot login', async ({ pomManager }) => {
        await pomManager.loginPage.login('problem_user', '_sauce');
        await pomManager.loginPage.expectedNonExistentUser();
    })

    test('User is able to login after error', async ({ pomManager }) => {
        await pomManager.loginPage.login('problem_user', '_sauce');
        await pomManager.loginPage.expectedNonExistentUser();
        await pomManager.loginPage.closeErrorButton();
        await pomManager.loginPage.login('visual_user', 'secret_sauce');
        await expect(pomManager.pageInstance.getByText('Products')).toBeVisible();
    })
    test('User can successfully logout', async ({ pomManager}) => {
        await pomManager.loginPage.successfulLogin();
        await pomManager.loginPage.logoutButton();
        await expect(pomManager.pageInstance.getByPlaceholder('Username')).toBeVisible();
    })
})
