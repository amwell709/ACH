import { test, expect } from '@playwright/test';
import ServiceToolBox from "../pages/ServiceToolBox";

var _service;

test.describe('login test', ()=> {

    test.beforeEach(async ({page}) => {
        _service = new ServiceToolBox(page);
        await page.goto(process.env.urlAdmin!);  
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })
          
     test('Service Hub - page', async ({ page }) => {
         await _service.clickServiceToolBoxTab();
         await _service.validationServiceToolBox();
      });
})

