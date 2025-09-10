import { Page } from '@playwright/test';
import { LoginFile } from '../pages/swag/LoginFile';

export class PageObjectManager {
  private _login?: LoginFile;
  constructor(private readonly page: Page) {}

  login(): LoginFile {
    return this._login ??= new LoginFile(this.page);
  }
}