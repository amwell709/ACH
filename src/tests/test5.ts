import { test, expect } from '@playwright/test';
import PartnerHub from "../pages/PartnerHub";
import CustomerToolBox from "../pages/CustomerToolBox";
import ServiceToolBox from "../pages/ServiceToolBox";

test('Partner Hub - page', async ({ page }) => {
    const _partnerHub = new PartnerHub(page);
    await page.goto(process.env.urlAdmin!);    
    await _partnerHub.clickPartnerTab();
    await _partnerHub.validationPartnerHub();
 });

test('Customer success Toolbox - page', async ({ page }) => {
    const _customer = new CustomerToolBox(page);
    await page.goto(process.env.urlAdmin!);
    await _customer.clickCustomerTab();
    await _customer.validationCustomerToolBox();
})


test('Service Hub - page', async ({ page }) => {
    const _service = new ServiceToolBox(page);
    await page.goto(process.env.urlAdmin!);
    await _service.clickServiceTab();
    await _service.validationServiceToolBox();
 });
