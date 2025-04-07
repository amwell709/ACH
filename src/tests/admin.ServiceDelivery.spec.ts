import { test, expect } from '@playwright/test';
import ServiceDelivery from "../pages/ServiceDelivery";
import { faker } from '@faker-js/faker';

var _serviceDelivery;
test.describe('Submit Delivery', ()=> {

    test.beforeEach(async ({page}) => {
        _serviceDelivery = new ServiceDelivery(page);
        await page.goto(process.env.urlAdmin!);   
        await _serviceDelivery.clickServiceDeliveryTab();
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })
          
    test('Overview page', async ({ page }) => {
        await _serviceDelivery.validationServiceDeliveryOverview();
     });

     test('Delivery page', async ({ page }) => {
        await _serviceDelivery.clickMyDeliveryTab();
        await _serviceDelivery.validationMyDeliveries();
     });
    test('Select Optimize type', async ({ page }) => {
        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = faker.person.fullName();
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Optimize');
        await _serviceDelivery.Submission();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)
     });

     test('Select Adopt type', async ({ page }) => {
        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = faker.person.fullName();
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Adopt');
        await _serviceDelivery.Submission();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)
     });
   
     test('Select Partner defined type', async ({ page }) => {
        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = faker.person.fullName();
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Partner defined');
        await _serviceDelivery.Submission();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)        
     });


     //
     test.only('Select Optimize type', async ({ page }) => {
      await _serviceDelivery.clickSubmitDeliveryTab();
      await _serviceDelivery.validationSubmitDelivery();
      const customerInfo = faker.person.fullName();
      await _serviceDelivery.customerName(customerInfo);
      await _serviceDelivery.selectAcceleratorType('Optimize');
      //
      await page.locator('#select2-accelerator_input-container').click();
      // enter 3D text to match the type of accelerator to delivery
      await page.keyboard.insertText('3D')
      await page.keyboard.press('Enter')
      await page.getByRole('textbox', { name: 'What date was the Accelerator' }).click()
      // press enter to select current date on the calendar
      await page.keyboard.press('Enter')
      await page.locator('label').filter({ hasText: 'By clicking the button below' }).click()
      await page.getByRole('button', { name: 'Submit Delivery ' }).click();
      await expect(page.getByText('Your delivery submission has')).toBeVisible();
      await page.getByRole('button', { name: 'Copy to Clipboard' }).click();
      const _url = page.getByRole('button', { name: 'Copy to Clipboard' }).click();
      console.log(_url)
      await page.getByRole('button', { name: 'Agree & Continue ' }).click();   
      //
      await _serviceDelivery.validationCompleteSubmition(customerInfo)
   });
    
})

