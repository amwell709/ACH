import {Page, expect} from "@playwright/test";

export default class ServiceToolBox {

    constructor (private page: Page) {}          

    async clickServiceToolBoxTab() {       
        await this.page.getByRole('link', { name: 'Services Toolbox', exact: true }).click()     
    }

    async validationServiceToolBox() {       
        await expect(this.page.getByRole('heading', { name: 'Services Toolbox' })).toBeVisible()
    }

}

