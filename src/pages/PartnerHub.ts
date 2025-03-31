import {Page, expect} from "@playwright/test";
import CommonActions from "../utils/CommonActions";

export default class PartnerHub {
    
    constructor (private page: Page) {
        this.page = page;       

    }          

    async clickPartnerTab() {       

        await this.page.getByRole('link', { name: 'PARTNER SUCCESS HUB', exact: true }).click();       
        
    }

     async validationPartnerHub() {       
        expect(this.page.getByRole('heading', { name: 'Partner Success Hub' })).toBeVisible();
    }

    async getMsg() {    
        
        const _msg = (await this.page.getByRole('heading', { name: 'Partner Success Hub' }).innerText());
        await console.log(_msg)
        return _msg;
    }

    async assertMessage (passMessage) {
        const message = (await this.page.getByRole('heading', { name: 'Partner Success Hub' }).innerText());
        //const message = await this.getMsg();
        expect(message).toContain(passMessage);
    }

}

