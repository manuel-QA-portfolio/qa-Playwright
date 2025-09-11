import { Page } from '@playwright/test';
import { LoginFile } from '../pages/swag/LoginFile';
import { CartManagement } from '../pages/swag/CartManagement';

export class PageObjectManager {
  private _login?: LoginFile;
  private _cart?: CartManagement;
  constructor(private readonly page: Page) { }

get loginPage(): LoginFile {
    if (!this._login) {
      this._login = new LoginFile(this.page);
    }
    return this._login;
  }
  get cartPage(): CartManagement {
    if (!this._cart) {
      this._cart = new CartManagement(this.page);
    }
    return this._cart;
  }
  get pageInstance(): Page{
    return this.page;
  }
}