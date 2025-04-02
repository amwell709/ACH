import {Page, expect} from "@playwright/test";

export default class ServiceDelivery {

   
    constructor (private page: Page) {
        this.page = page;

    }          

    async clickServiceDeliveryTab() {    
       await this.page.getByRole('link', { name: 'Service Delivery', exact: true }).click();   
    }

    async validationServiceDelivery() {       
        expect(this.page.getByRole('heading', { name: 'Service Delivery' })).toBeVisible();
    }

    async validationServiceDeliveryOverview() {       
        await expect(this.page.getByRole('heading', { name: 'Measure Success of Adopt &' })).toBeVisible();
    }
  
    async clickSubmitDeliveryTab() {       
        await this.page.getByRole('link', { name: 'Submit a Delivery', exact: true }).click();
    }

    async validationSubmitDelivery() {       
        await expect(this.page.getByRole('heading', { name: 'Submit a Completed Delivery' })).toBeVisible();
    }

    async clickMyDeliveryTab() {       
        await this.page.getByRole('link', { name: 'My Deliveries' }).click();  
    }

    async validationMyDeliveries() {       
        await expect(this.page.getByRole('heading', { name: 'Deliveries Feedback Summary' })).toBeVisible();
    }

    // generate random customer name
    async customerName(customerInfo) {            
        await this.page.getByRole('textbox', { name: 'What is the name of the' }).fill(customerInfo);
    }

    async selectAcceleratorType(selectOne) { 
        await this.page.getByText(selectOne, { exact: true }).click();
    }  

    // fill out information and submit
    async Submission() {          
        await this.page.locator('#select2-accelerator_input-container').click();
        await this.page.getByRole('option', { name: '3D Coordination Foundation (Buildings)' }).click();      
        await this.page.getByRole('textbox', { name: 'What date was the Accelerator' }).click()
        await this.page.getByRole('cell', { name: '1' }).nth(1).click();
        await this.page.locator('label').filter({ hasText: 'By clicking the button below' }).click()
        await this.page.getByRole('button', { name: 'Submit Delivery ' }).click();
        await expect(this.page.getByText('Your delivery submission has')).toBeVisible();
        await this.page.getByRole('button', { name: 'Copy to Clipboard' }).click();
        await this.page.getByRole('button', { name: 'Agree & Continue ' }).click();    
    }

    async validationCompleteSubmition(customerInfo) {       
        await expect(this.page.getByRole('heading', { name: 'Deliveries Feedback Summary' })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: customerInfo })).toBeVisible();
    }

    // to get dynamic dropdown value. 
    // async Submission() {          
    //     await this.page.locator('#select2-accelerator_input-container').click();
    //     await this.page.getByRole('option', { name: '3D Coordination Foundation (Buildings)' }).click();        
    //     // To Do: change to select index value.
    //     // await this.page.locator('span#select2-accelerator_input-container').click();
    //     // await this.page.selectOption('span#select2-accelerator_input-container', {index: 2});
    //     // await this.page.locator('span#select2-accelerator_input-container').selectOption('2');   
    //     await this.page.getByRole('textbox', { name: 'What date was the Accelerator' }).click()
    //     await this.page.getByRole('cell', { name: '1' }).nth(1).click();
    //     await this.page.locator('label').filter({ hasText: 'By clicking the button below' }).click()
    //     await this.page.getByRole('button', { name: 'Submit Delivery ' }).click();
    //     await expect(this.page.getByText('Your delivery submission has')).toBeVisible();
    //     await this.page.getByRole('button', { name: 'Copy to Clipboard' }).click();
    //     await this.page.getByRole('button', { name: 'Agree & Continue ' }).click();    
    // }

}