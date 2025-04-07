import {Page, expect} from "@playwright/test";

export default class ServiceDelivery {

   
    constructor (private page: Page) {
        this.page = page;

    }          

    async clickServiceDeliveryTab() {    
       await this.page.getByRole('link', { name: 'Service Delivery', exact: true }).click();   
    }

    async validationServiceDelivery() {       
        await expect(this.page.getByRole('heading', { name: 'Service Delivery' })).toBeVisible();
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
        // enter 3D text to match the type of accelerator to delivery
        await this.page.keyboard.insertText('3D')
        await this.page.keyboard.press('Enter')
        await this.page.getByRole('textbox', { name: 'What date was the Accelerator' }).click()
        // press enter to select current date on the calendar
        await this.page.keyboard.press('Enter')
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

}