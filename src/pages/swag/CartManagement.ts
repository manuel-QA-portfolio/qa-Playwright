import { Locator, Page, expect } from '@playwright/test';

export class CartManagement {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async cartOverview(): Promise<void> {
        await this.page.locator('a[data-test="shopping-cart-link"]').click();
        await this.page.locator('button[data-test="checkout"]').waitFor({ state: 'visible' });
    }
    async backShoppingButton(): Promise<void> {
        await this.page.locator('a[data-test="shopping-cart-link"]').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
    }
    async addItemsToCart(): Promise<void> {
        await this.page.locator('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        await this.page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    async removeItemsFromCart(): Promise<void> {
        await this.page.locator('button[data-test="remove-sauce-labs-backpack"]').click();
        await this.page.locator('button[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
    }
    async addItemFromDetailItemPage(): Promise<void> {
        await this.page.locator('a[data-test="item-2-title-link"]').click();
        //tenemos que hacer un check del nombre del articulo en el test
        await this.page.getByRole('button', {name: 'Add to cart'}).click();
    }

}
