import { Page, expect } from '@playwright/test';

export class LoginFile {
    readonly page: Page;

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

    async lockedUserMessage(): Promise<void> {
        await expect(
            this.page.getByText('Sorry, this user has been locked out.')
        ).toBeVisible();
    }
    async nonExistentUserLoggedIn(): Promise<void> {
        await expect(
            this.page.getByText('Epic sadface: Username and password do not match any user in this service')
        ).toBeVisible();
    }
    async closeErrorButton() : Promise<void> {
        await this.page.locator('[data-test="error-button"]').click();
    }
}
