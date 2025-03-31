import {Page, expect} from "@playwright/test";

export default class Accreditation {

    constructor (private page: Page) {
        this.page = page;

    }          

    async clickAccreditationTab() {       
        await this.page.getByRole('link', { name: 'Accreditation', exact: true }).click();
    }

    async clickAccreditationOverView() {       
        await this.page.getByRole('link', { name: 'Overview', exact: true }).click();
    }

    async validationAccreditationOverView() {       
        expect(this.page.getByRole('heading', { name: 'Accreditations Overview' })).toBeVisible();
    }

    async clickOptimizeTab() {       
        await this.page.getByRole('link', { name: 'Optimize Accelerator', exact: true }).click();   
    }    

    async clickSkillTab() {       
        await this.page.getByRole('link', { name: 'Skill', exact: true }).click();   
    }    
    async clickTechnicalCapabilityTab() {       
        await this.page.getByRole('link', { name: 'Technical Capability', exact: true }).click();   
    }    

    async clickPartnerDefinedTab() {       
        await this.page.getByRole('link', { name: 'Partner Defined', exact: true }).click();   
    }    
    
    async clickMyAccreditationsTab() {       
        await this.page.getByRole('link', { name: 'My Accreditations', exact: true }).click();   
    }    

    async validationAccreditationOpimize() {       
        await expect(this.page.getByRole('heading', { name: 'Optimize Accelerator Accreditation', exact: true })).toBeVisible();
    }
    async validationAccreditationSkill() {       
        await expect(this.page.getByRole('heading', { name: 'Skill Accreditation', exact: true })).toBeVisible();
    }
    async validationAccreditationTechnical() {       
        await expect(this.page.getByRole('heading', { name: 'Technical Capability Accreditation', exact: true })).toBeVisible();
    }
    async validationAccreditationPartnerDefine() {       
        await expect(this.page.getByRole('heading', { name: 'Partner Defined Service Accreditation', exact: true })).toBeVisible();
    }
    async validationMyAccreditation() {       
        await expect(this.page.getByRole('heading', { name: 'My Accreditations', exact: true })).toBeVisible();
    }




    // await page.getByRole('link', { name: 'Skill' }).click();
    // await expect(page.getByRole('heading', { name: 'Skill Accreditation', exact: true })).toBeVisible();
    // await page.getByRole('link', { name: 'Technical Capability' }).click();
    // await expect(page.getByRole('heading', { name: 'Technical Capability Accreditation', exact: true })).toBeVisible();
    // await page.getByRole('link', { name: 'Partner Defined' }).click();
    // await expect(page.getByRole('heading', { name: 'Partner Defined Service Accreditation', exact: true })).toBeVisible();
    // await page.getByRole('link', { name: 'My Accreditations' }).click();
    // await expect(page.getByRole('heading', { name: 'My Accreditations' })).toBeVisible();

    async getMsg() {    
        
        const _msg = (await this.page.getByRole('heading', { name: 'PARTNER SUCCESS HUB' }).innerText());
        await console.log(_msg)
        return _msg;
    }

    async assertMessage (passMessage) {
        const message = await this.getMsg();
        expect(message).toContain(passMessage);
    }
}