// import { test, expect } from '../swaglabs/fixtures/login.fixture';


// test.describe('Login control', () => {

//     test('Access', async ({ page }) => {
//         await page.goto('/');
//         await expect(page.getByText('Swag Labs')).toBeVisible();
//     })

//     test('Login successful', async ({ accessLoginPage, page }) => {
//         await accessLoginPage.login('standard_user', 'secret_sauce');
//         await expect(page.getByText('Products')).toBeVisible();
//     })

//     test('Locked user is not able to perform login', async ({ accessLoginPage, page }) => {
//         await accessLoginPage.login('locked_out_user', 'secret_sauce');
//         await accessLoginPage.expectedLockedMessage();
//     })

//     test('Non existent user cannot login', async ({ accessLoginPage, page }) => {
//         await accessLoginPage.login('problem_user', '_sauce');
//         await accessLoginPage.expectedNonExistentUser();
//     })

//     test('User is able to login after error', async ({ accessLoginPage, page }) => {
//         await accessLoginPage.login('problem_user', '_sauce');
//         await accessLoginPage.expectedNonExistentUser();
//         await accessLoginPage.closeErrorButton();
//         await accessLoginPage.login('visual_user', 'secret_sauce');
//         await expect(page.getByText('Products')).toBeVisible();
//     })
//     test('User can successfully logout', async ({ successfulLogin, page }) => {
//         await successfulLogin.logoutButton();
//         await expect(page.getByPlaceholder('Username')).toBeVisible();
//     })
// })
