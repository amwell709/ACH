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
        //await _serviceDelivery.clickSubmitDeliveryTab();
        //await _serviceDelivery.validationSubmitDelivery();
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })
          
    test('Submit Delivery - Overview page', async ({ page }) => {
        await _serviceDelivery.validationServiceDeliveryOverview();
     });

     test('Submit Delivery - Delivery page', async ({ page }) => {
        await _serviceDelivery.clickMyDeliveryTab();
        await _serviceDelivery.validationMyDeliveries();
     });


    test('Submit Delivery - Optimize', async ({ page }) => {

        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = Math.random().toString(36).substring(7);
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Optimize')
        await _serviceDelivery.Submition();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)
     });
   
    test('Submit Delivery - Adopt', async ({ page }) => {

        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = Math.random().toString(36).substring(7);
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Adopt')
        await _serviceDelivery.Submition();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)

     });

     test('Submit Delivery - Partner defined', async ({ page }) => {

        await _serviceDelivery.clickSubmitDeliveryTab();
        await _serviceDelivery.validationSubmitDelivery();
        const customerInfo = Math.random().toString(36).substring(7);
        await _serviceDelivery.customerName(customerInfo);
        await _serviceDelivery.selectAcceleratorType('Partner defined')
        await _serviceDelivery.partnerDefinedSubmition();
        await _serviceDelivery.validationCompleteSubmition(customerInfo)

     });

    
})

