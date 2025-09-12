import { test, expect } from './fixtures/pomManager.fixture';


test.describe('Test set to control Cart options for the user', { tag: '@cartControl' }, () => {

    test.beforeEach(async ({ pomManager }) => {
        await pomManager.loginPage.successfulLogin();
    })

    test('User is able to see the cart', async ({ pomManager }) => {
        await pomManager.cartPage.cartOverview();
        await expect(pomManager.pageInstance.locator('button[data-test="checkout"]')).toBeVisible();
    })

    test('User is able to go to the main page from the cart', async ({ pomManager }) => {
        await pomManager.cartPage.cartOverview();
        await pomManager.cartPage.backShoppingButton();
        await expect(pomManager.pageInstance.getByText('Products')).toBeVisible();
    })

    test('Cart is updated upon adding items', async ({ pomManager }) => {
        await pomManager.cartPage.addItemsToCart();
        await expect(pomManager.pageInstance.locator('button[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await expect(pomManager.pageInstance.locator('button[data-test="remove-test.allthethings()-t-shirt-(red)"]')).toBeVisible();
        await expect(pomManager.pageInstance.locator('span[data-test="shopping-cart-badge"]')).toContainText('2');
        await pomManager.cartPage.cartOverview();
        await expect(pomManager.pageInstance.locator('a[data-test="item-4-title-link"]')).toContainText('Sauce Labs Backpack');
        await expect(pomManager.pageInstance.locator('a[data-test="item-3-title-link"]')).toHaveText('Test.allTheThings() T-Shirt (Red)');
    })

    test('Items are removed from the cart', async ({ pomManager }) => {
        await pomManager.cartPage.addItemsToCart();
        await pomManager.cartPage.removeItemsFromCart();
        await expect(pomManager.pageInstance.locator('span[data-test="shopping-cart-badge"]')).toBeHidden();
        await expect(pomManager.pageInstance.locator('div[data-test="item-quantity"]')).toBeHidden();
    })
    
    test('Item can be added to the cart from item details', async ({ pomManager }) => {
        await pomManager.cartPage.addItemFromDetailItemPage();
        await expect(pomManager.pageInstance.locator('div[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Onesie');
        await expect(pomManager.pageInstance.locator('span[data-test="shopping-cart-badge"]')).toContainText('1');
        await pomManager.cartPage.cartOverview();
        await expect(pomManager.pageInstance.locator('div[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Onesie');
    })
})
