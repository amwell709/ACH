import {Page, expect} from "@playwright/test";

export default class CustomerToolBox {

    constructor (private page: Page) {}          

    async clickCustomerTab() {       
        await this.page.getByRole('link', { name: 'Customer Success Toolbox', exact: true }).click();   
    }

    async validationCustomerToolBox() {       
        expect(this.page.getByRole('heading', { name: 'Customer Success Toolbox' })).toBeVisible();
    }

}

