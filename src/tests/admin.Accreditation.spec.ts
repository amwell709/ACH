import { test, expect } from '@playwright/test';
import Accreditation from "../pages/Accreditation";
import { randomInt } from 'crypto';
import { rename } from 'fs';

var _accreditation;

test.describe('login test', ()=> {

    test.beforeEach(async ({page}) => {
        _accreditation = new Accreditation(page);
        await page.goto(process.env.urlAdmin!);  
        await _accreditation.clickAccreditationTab();
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })
          
    /*
    test('Accreditation - Overview', async ({ page }) => {
        await _accreditation.clickAccreditationOverView()
        await _accreditation.validationAccreditationOverView()         
    });

    test('Accreditation - Optimize Accelerator page', async ({ page }) => {
        await _accreditation.clickOptimizeTab()   
        await _accreditation.validationAccreditationOpimize()     
   });

   test('Accreditation - Skill page', async ({ page }) => {

    await _accreditation.clickSkillTab()   
    await _accreditation.validationAccreditationSkill();
   });

   test('Accreditation - Techincal Capablility page', async ({ page }) => {

    await _accreditation.clickTechnicalCapabilityTab()
    await _accreditation.validationAccreditationTechnical()        
   });

   test('Accreditation -  Partner define page', async ({ page }) => {
    await _accreditation.clickPartnerDefinedTab();
    await _accreditation.validationAccreditationPartnerDefine()    
   });

   test('Accreditation - My Accreditation page', async ({ page }) => {
    await _accreditation.clickMyAccreditationsTab();
    await _accreditation.validationMyAccreditation()
   })

   */
   
   // successful defined service accreditation
   test('Accreditation - Partner service definition ', async ({ page }) => {
    await _accreditation.clickPartnerDefinedTab();
    await _accreditation.validationAccreditationPartnerDefine() 
    // TO DO form valiation    
    await page.locator('section').filter({ hasText: 'How Partner Defined Service' }).getByRole('link').click();
    //await page.getByRole('textbox', { name: 'This should be a customer facing title that embodies the service that it' }).click();
    var num = randomInt(1, 100)
    await page.getByRole('textbox', { name: 'This should be a customer facing title that embodies the service that it' }).fill('Test service name '+num);
    //await page.getByRole('textbox', { name: 'This should be a customer facing description that will be published to your' }).click();
    await page.getByRole('textbox', { name: 'This should be a customer facing description that will be published to your' }).fill('something I can do');
    await page.getByRole('spinbutton', { name: 'Provide an estimation of how' }).click();
    var numDay = randomInt(1, 30).toString()
    await page.getByRole('spinbutton', { name: 'Provide an estimation of how' }).fill(numDay);
    await page.locator('label').filter({ hasText: 'Architecture, Engineering &' }).locator('div').nth(3).click();
    await page.getByRole('listitem').filter({ hasText: 'Business Growth Sample' }).locator('div').nth(3).click();
    await page.getByRole('listitem').filter({ hasText: 'Accelerate Creative Review' }).locator('div').nth(3).click();
    await page.locator('label').filter({ hasText: 'Animation and Rigging' }).locator('div').nth(3).click();
    await page.getByRole('listitem').filter({ hasText: /^3ds Max$/ }).locator('div').nth(3).click();
    await page.getByRole('listitem').filter({ hasText: /^BIM$/ }).locator('div').nth(3).click();
    await page.getByRole('textbox', { name: 'Please provide additional' }).click();
    await page.getByRole('textbox', { name: 'Please provide additional' }).fill('qa test definition details');
    await page.getByRole('button', { name: 'Submit Service ' }).click();
    await expect(page.getByText('Service Definition was')).toBeVisible();
   });

//    // validate required fields
//    test('Accreditation - Partner service definition ', async ({ page }) => {
//     await _accreditation.clickPartnerDefinedTab();
//     await _accreditation.validationAccreditationPartnerDefine() 
//     await page.locator('section').filter({ hasText: 'How Partner Defined Service' }).getByRole('link').click();
//     await page.getByRole('button', { name: 'Submit Service ' }).click();
//     // validate service name field popup message
//     const ServiceName = page.locator('div').filter({ hasText: /^Service Name$/ }); // Adjust selector
//     await expect(ServiceName).toBeVisible()
//     await expect(ServiceName).toContainText('Please fill out this field.')
//     await page.getByRole('textbox', { name: 'This should be a customer facing title that embodies the service that it' }).fill('Test service name ');
//     await page.getByRole('button', { name: 'Submit Service ' }).click();
//     // validate short desciption field popup message
//     const ShortDescription = page.locator('div').filter({ hasText: /^Short Description$/ });
//     await page.locator('div').filter({ hasText: /^Short Description$/ });
//     await expect(ServiceName).toBeVisible();
//     //await expect(ServiceName).toContainText('Please fill out this field.')
//    });

});





