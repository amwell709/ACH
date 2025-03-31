import { test, expect } from '@playwright/test';
import CustomerToolBox from "../pages/CustomerToolBox";


var _customer;

test.describe('login test', ()=> {

    test.beforeEach(async ({page}) => {
        _customer = new CustomerToolBox(page);
        await page.goto(process.env.urlAdmin!);  
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })
    
     test('Customer success Toolbox - page', async ({ page }) => {
         await _customer.clickCustomerTab();
         await _customer.validationCustomerToolBox();
     })
          
})

