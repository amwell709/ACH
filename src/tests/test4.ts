import { test, expect } from '@playwright/test';

test('Login Test for Autodesk Partner Success Hub', async ({ page, context}) => {

    //await context.clearCookies();
    await page.goto('https://qa_user:qa_password@partnersuccesshub-stg.autodesk.com/');

    // await page.authenticate({ username: 'your-username', password: 'your-password' });
    // await page.goto('https://partnersuccesshub-stg.autodesk.com/');

    await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'What\'s new' })).toBeVisible();
    

});
