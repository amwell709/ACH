import { test, expect } from '@playwright/test';
//import PartnerHub from "../pages/PartnerHub";
import CustomerToolBox from "../pages/CustomerToolBox";
import ServiceToolBox from "../pages/ServiceToolBox";
import CommonActions from '../utils/CommonActions';




var _partnerHub

test.describe('login test', ()=> {

    test.beforeEach(async ({page}) => {
       _partnerHub = new PartnerHub(page);       
        await page.goto(process.env.urlAdmin!);  
    } )

    // test('Partner Hub - page', async ({ page }) => {     
    //     //var _partnerHub = new PartnerHub(page);
    //     await _partnerHub.PartnerTab().click();   
    //     await _partnerHub.assertMessage("PARTNER SUCCESS HUB")
    //     await page.waitForTimeout(3000);   
    
    //  });
// test('Partner Hub - page', async ({ page }) => {     
//     //var _partnerHub = new PartnerHub(page);
//     //await _partnerHub.clickPartnerTab();
//     //await _partnerHub.validationPartnerHub();
//     //var _m = await page.getByRole('heading', { name: 'Partner Success Hub' }).innerText();     
//     await _partnerHub.assertMessage("PARTNER SUCCESS HUB")
//     await page.waitForTimeout(3000);   

//  });

// test('Partner Hub - page', async ({ page }) => {     

//     //var _partnerHub = new PartnerHub(page);
//     await _partnerHub.assertMessage("PARTNER SUCCESS HUB")
//     await page.waitForTimeout(3000);   

//  });

 test('Partner Hub - page', async ({ page }) => {     
    //var _partnerHub = new PartnerHub(page);
    await _partnerHub.clickPartnerTab1();
    await page.waitForTimeout(3000);   

 });
})