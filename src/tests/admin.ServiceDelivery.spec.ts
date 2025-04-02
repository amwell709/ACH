import { test, expect } from '@playwright/test';
import ServiceDelivery from "../pages/ServiceDelivery";
import GenRandom from '../utils/GenRandom';

var _serviceDelivery;
var _gen;
test.describe('Submit Delivery', ()=> {

    test.beforeEach(async ({page}) => {
        _serviceDelivery = new ServiceDelivery(page);
        _gen = new GenRandom()

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
        const customerInfo = await(_gen.getRandomName());
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Optimize')
        await _serviceDelivery.Submission();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)
     });
   
    test('Select Adopt type', async ({ page }) => {

        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = await(_gen.getRandomName());
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Adopt')
        await _serviceDelivery.Submission();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)

     });

     test('Select Partner defined type', async ({ page }) => {

        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = await(_gen.getRandomName());
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Partner defined')
        await _serviceDelivery.Submission();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)

     });


     // this test is to get value from a dropdown
//      test('Submit Delivery - Optimize', async ({ page }) => {

//         await _serviceDelivery.clickSubmitDeliveryTab();
//         await _serviceDelivery.validationSubmitDelivery();
//         // await page.getByRole('link', { name: 'Service Delivery', exact: true }).click();
//         // await page.getByRole('link', { name: 'Submit a Delivery', exact: true }).click();
//         // await page.getByRole('textbox', { name: 'What is the name of the' }).click();
//         // await page.getByRole('textbox', { name: 'What is the name of the' }).fill('test');
//         // await page.getByText('Adopt', { exact: true }).click();
//         await page.locator('#select2-accelerator_input-container').first().dblclick()
//         await page.locator('#select2-accelerator_input-container').click();
//         const txt = page.locator('#select2-accelerator_input-container').first().innerHTML()
//         console.log(txt)
//   });

    
})

