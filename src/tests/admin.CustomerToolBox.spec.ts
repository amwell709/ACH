import { test, expect } from '@playwright/test';
import CustomerToolBox from "../pages/CustomerToolBox";


var _customer;

test.describe('Customer success Toolbox', ()=> {

    test.beforeEach(async ({page}) => {
        _customer = new CustomerToolBox(page);
        await page.goto(process.env.urlAdmin!);  
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })
    
     test('Toolbox page', async ({ page }) => {
         await _customer.clickCustomerTab();
         await _customer.validationCustomerToolBox();
     })
          
})

