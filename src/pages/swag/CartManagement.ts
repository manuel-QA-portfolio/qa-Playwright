import { Page, expect } from '@playwright/test';

export class CartManagement {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(): Promise<void> {
        await this.page.goto('/');
    }

    async login(user: string, pass: string): Promise<void> {
        await this.page.getByPlaceholder("Username").fill(user);
        await this.page.getByPlaceholder("Password").fill(pass);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async expectedLockedMessage(): Promise<void> {
        await expect(
            this.page.getByText('Sorry, this user has been locked out.')
        ).toBeVisible();
    }
    async expectedNonExistentUser(): Promise<void> {
        await expect(
            this.page.getByText('Epic sadface: Username and password do not match any user in this service')
        ).toBeVisible();
    }
    async closeErrorButton() : Promise<void> {
        await this.page.locator('[data-test="error-button"]').click();
    }
    async logoutButton() : Promise<void>{
        await this.page.getByRole('button', {name: 'Open Menu'}).click();
        await this.page.locator('#logout_sidebar_link').click();
    }
}
