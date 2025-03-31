import { expect, test } from '@playwright/test';
import LoginPage from "../pages/LoginPage";

// test.beforeEach('login...', async ({ page, context}) => {
//     const loginPage = new LoginPage(page)   
//     await loginPage.navigateToLoginPage()
//     await expect(page.getByRole('heading', { name: 'What\'s new' })).toBeVisible();
//     await context.storageState({ path: process.env.authFile! });

//   });


test('New Test 1 ', async ({ browser }) => {
    const context = await browser.newContext ({storageState: process.env.authFile!});
    const page = await context.newPage();
    //await page.goto(process.env.url!);
    await expect(page.getByRole('heading', { name: 'What\'s new' })).toBeVisible();
    await page.getByRole('link', { name: 'Services Toolbox Services' }).click();
    await page.waitForTimeout(2000);
    
 })    

 test('New Test 2 - User', async ({ page }) => {
  await page.goto(process.env.urlUser!);
  await expect(page.getByRole('heading', { name: 'What\'s new' })).toBeVisible();
  await page.getByRole('link', { name: 'Services Toolbox Services' }).click();
  await page.waitForTimeout(2000);  
})    

test('Admin ', async ({ page }) => {
  await page.goto(process.env.urlAdmin!);
  await expect(page.getByRole('heading', { name: 'What\'s new' })).toBeVisible();
  await page.getByRole('link', { name: 'Services Toolbox Services' }).click();
  await page.waitForTimeout(2000);  
})    

// test.afterAll (async ({ page}) => {
//     page.close ();

// });