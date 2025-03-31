import {Page, expect} from "@playwright/test";

export default class HomePage {

    private readonly usernameInputSelector = ""

    constructor (private page: Page) {
        
    }
 
    async expectToSee() {
       
        //await expect(this.page.getByText('Quarterly Performance', { exact: true })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'What\'s new' })).toBeVisible();

    }

}