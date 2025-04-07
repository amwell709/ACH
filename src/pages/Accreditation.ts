import {Page, expect} from "@playwright/test";
import { faker } from '@faker-js/faker';

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
        await expect(this.page.getByRole('heading', { name: 'Accreditations Overview' })).toBeVisible();
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

    async clickOptimizeReadMore() {       
        await this.page.getByRole('link', { name: 'Optimize Accelerator Accreditation Accelerator Accreditation highlights the' }).click()
    }  
    async clickSkillReadMore() {       
        await this.page.getByRole('link', { name: 'Skill Accreditation Skill' }).click()
    }    
    async clickTechnicalCapabilityReadMore() {       
        await this.page.getByRole('link', { name: 'Technical Capability Accreditation Technical Capability Accreditation' }).click()
    }    

    async clickPartnerDefinedTab() {       
        await this.page.getByRole('link', { name: 'Partner Defined', exact: true }).click();
    }    
    async clickPartnerDefinedReadMore() {       
        await this.page.getByRole('link', { name: 'Partner Defined Accreditation' }).click()
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

    async clickPartnerDefineService() {       
        await this.page.locator('section').filter({ hasText: 'How Partner Defined Service' }).getByRole('link').click();
    }

    async fillOutServiceDefinitionForm(num) {    
                
        //const serviceName = Math.random().toString(36).substring(7);
        const serviceName = faker.commerce.productName()
        const serviceDescription = faker.commerce.productDescription()
        
        await this.page.getByRole('textbox', { name: 'This should be a customer facing title that embodies the service that it' }).fill(serviceName);
        await this.page.getByRole('textbox', { name: 'This should be a customer facing description that will be published to your' }).fill(serviceDescription);
        await this.page.getByRole('spinbutton', { name: 'Provide an estimation of how' }).click();        
        await this.page.getByRole('spinbutton', { name: 'Provide an estimation of how' }).fill(num);
        await this.page.locator('label').filter({ hasText: 'Architecture, Engineering &' }).locator('div').nth(3).click();
        await this.page.getByRole('listitem').filter({ hasText: 'Business Growth Sample' }).locator('div').nth(3).click();
        await this.page.getByRole('listitem').filter({ hasText: 'Accelerate Creative Review' }).locator('div').nth(3).click();
        await this.page.locator('label').filter({ hasText: 'Animation and Rigging' }).locator('div').nth(3).click();
        await this.page.getByRole('listitem').filter({ hasText: /^3ds Max$/ }).locator('div').nth(3).click();
        await this.page.getByRole('listitem').filter({ hasText: /^BIM$/ }).locator('div').nth(3).click();
        await this.page.getByRole('textbox', { name: 'Please provide additional' }).click();
        await this.page.getByRole('textbox', { name: 'Please provide additional' }).fill('qa test definition details');
    }

    async missedRequiredInfoServiceDefinitionForm(num) {    
                
        //const serviceName = Math.random().toString(36).substring(7);
        const serviceName = faker.commerce.productName()
        await this.page.getByRole('textbox', { name: 'This should be a customer facing title that embodies the service that it' }).fill(serviceName);
        await this.page.getByRole('textbox', { name: 'This should be a customer facing description that will be published to your' }).fill('short description here');    
        await this.page.getByRole('spinbutton', { name: 'Provide an estimation of how' }).fill(num);
        await this.page.getByRole('textbox', { name: 'Please provide additional' }).fill('qa test definition details');
    }

    // verify error message
    async validationPartnerDefineServiceForm() {       
        await expect(this.page.getByText('There was an issue creating')).toBeVisible();
        await expect(this.page.getByText('Must select at least one Industry')).toBeVisible();
        await expect(this.page.getByText('Must select at least one Value Driver')).toBeVisible();
        await expect(this.page.getByText('Must select at least one Capabilities')).toBeVisible();
        await expect(this.page.getByText('Must select at least one Products')).toBeVisible();
        await expect(this.page.getByText('Must select at least one Services')).toBeVisible();
    }

    async submitPartnerDefineService() {       
        await this.page.getByRole('button', { name: 'Submit Service ' }).click();
    }

    async validationPartnerDefineService() {       
        await expect(this.page.getByText('Service Definition was')).toBeVisible();
    }

    async validateFormRequiredfields(popupMsg) {       
        // validate service name field popup message
        const ServiceName = this.page.locator('div').filter({ hasText: /^popupMsg$/ }); // Adjust selector
        await expect(ServiceName).toBeVisible()
    }
    


}