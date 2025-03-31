import { test, expect } from '@playwright/test';
import PartnerHub from "../pages/PartnerHub";

var _partnerHub;

test.describe('login test', ()=> {

    test.beforeEach(async ({page}) => {
        _partnerHub = new PartnerHub(page);
        await page.goto(process.env.urlAdmin!);  
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })

    test('Partner Hub - page - test 1', async ({ page }) => {  
        await _partnerHub.clickPartnerTab();
        await _partnerHub.validationPartnerHub();
     });

     test('Partner Hub - page - test 2', async ({ page }) => {  
        await _partnerHub.assertMessage("PARTNER SUCCESS HUB")
        await page.waitForTimeout(3000);
     });
     
})

