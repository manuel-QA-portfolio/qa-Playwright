import {test as base} from '@playwright/test'
import { LoginFile } from '../../../src/pages/swag/LoginFile'

type Fixtures = {accessLoginPage: LoginFile};

export const test = base.extend <Fixtures> ({
    accessLoginPage: async ({page}, use) => {
        const login = new LoginFile(page);
        await login.open();
        await use(login);
    }
})

export {expect} from '@playwright/test'