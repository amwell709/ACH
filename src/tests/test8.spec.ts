import { test, expect } from '@playwright/test';
import ServiceDelivery from "../pages/ServiceDelivery";
import CommonActions from '../utils/GenRandom';

var _serviceDelivery;
var _actions;
test.describe('login test', ()=> {

    // test.beforeEach(async ({page}) => {
    //     _serviceDelivery = new ServiceDelivery(page);
    //     _actions = new CommonActions(page)
    //     await page.goto(process.env.urlAdmin!);   
    //     await _serviceDelivery.clickServiceDeliveryTab();
    //     await _serviceDelivery.clickSubmitDeliveryTab();
    //     await _serviceDelivery.validationSubmitDelivery();
    // } )

    // test.afterEach (async ({page}) => {
    //     await page.close();
    // })
          

     
   //  test('Submit Delivery - Optimize', async ({ page }) => {

   //      // const randomText = Math.random().toString(36).substring(7);
   //      // await page.getByRole('textbox', { name: 'What is the name of the' }).fill(randomText);
   //      const randomText = Math.random().toString(36).substring(7);
   //      await _serviceDelivery.customerName(randomText);
   //      await _serviceDelivery.selectAcceleratorType('Partner defined')
   //      //await page.getByText('Optimize', { exact: true }).click();
   //      await _serviceDelivery.partnerDefinedSubmition();
   //      await expect(page.getByRole('heading', { name: 'Deliveries Feedback Summary' })).toBeVisible();
   //      await expect(page.getByRole('cell', { name: randomText })).toBeVisible();

   //   });


   //   test('Submit Delivery - Optimize', async ({ page }) => {


   //      await page.goto('https://www.salesforce.com/form/signup/elf-v2-login/?d=70130000000Enus');
   //      await page.getByLabel('Employees').selectOption('10');

   //   });

     test('Submit Delivery - Optimize', async ({ page }) => {

         await page.goto('https://partnersuccesshub-stg.autodesk.com/');
         await page.getByRole('link', { name: 'Service Delivery', exact: true }).click();
         await page.getByRole('link', { name: 'Submit a Delivery', exact: true }).click();
         await page.getByRole('textbox', { name: 'What is the name of the' }).click();
         await page.getByRole('textbox', { name: 'What is the name of the' }).fill('test');
         await page.getByText('Adopt', { exact: true }).click();
         await page.locator('#select2-accelerator_input-container').click();
         var dropValue =  page.locator('#select2-accelerator_input-container').innerText()
         console.log(dropValue)
         await page.getByRole('option', { name: 'AutoCAD Graphics Improvements' }).click();
         await page.locator('#delivery-date').getByRole('img').click();
         await page.getByRole('cell', { name: '27' }).nth(1).click();


   });



})

