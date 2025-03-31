import { test, expect } from '@playwright/test';
import ServiceDelivery from "../pages/ServiceDelivery";
import CommonActions from '../utils/CommonActions';

var _serviceDelivery;
var _actions;
test.describe('login test', ()=> {

    test.beforeEach(async ({page}) => {
        _serviceDelivery = new ServiceDelivery(page);
        _actions = new CommonActions(page)
        await page.goto(process.env.urlAdmin!);   
        await _serviceDelivery.clickServiceDeliveryTab();
        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })
          

     
    test('Submit Delivery - Optimize', async ({ page }) => {

        // const randomText = Math.random().toString(36).substring(7);
        // await page.getByRole('textbox', { name: 'What is the name of the' }).fill(randomText);
        const randomText = Math.random().toString(36).substring(7);
        await _serviceDelivery.customerName(randomText);
        await _serviceDelivery.selectAcceleratorType('Partner defined')
        //await page.getByText('Optimize', { exact: true }).click();
        await _serviceDelivery.partnerDefinedSubmition();
        await expect(page.getByRole('heading', { name: 'Deliveries Feedback Summary' })).toBeVisible();
        await expect(page.getByRole('cell', { name: randomText })).toBeVisible();

     });


     await page.getByRole('link', { name: 'Service Delivery', exact: true }).click();
     await page.getByRole('link', { name: 'Submit a delivery', exact: true }).click();
     await page.getByRole('textbox', { name: 'What date was the Accelerator' }).click();
     await page.getByRole('cell', { name: '27' }).nth(1).click();
     await page.getByRole('heading', { name: 'Customer Information' }).click();


     await page.getByRole('link', { name: 'Overview', exact: true }).click();
     await expect(page.getByRole('heading', { name: 'Measure Success of Adopt &' })).toBeVisible();
     await page.getByRole('link', { name: 'My Deliveries' }).click();
     await expect(page.getByRole('heading', { name: 'Deliveries Feedback Summary' })).toBeVisible();


})

