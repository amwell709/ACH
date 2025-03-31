import { test, expect } from '@playwright/test';

const baseURL = process.env.url as string;

test.beforeEach(async ({ page}) => {
    await page.goto(baseURL);
  });

test.afterAll (async ({ page}) => {
    page.close ();
  });

test('Test 1 ', async ({ page, context }) => {

    console.log("done")
    //await expect(page.locator('text=Popular products')).toBeVisible(); 
});

test('Test 2 ', async ({ page, context }) => {
  console.log("done")
    //await expect(page.locator('text=Popular products')).toBeVisible(); 
});




/*
test('Test 1 ', async ({ page, context }) => {
    // Step 1: Go to Autodesk's login-protected page
    //await page.goto('https://www.autodesk.com/products');await page.goto('https://www.google.com/?gws_rd=ssl');
    await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
    await page.goto('https://www.autodesk.com/');

    // Step 2: Click the "Sign In" button (Update selector if needed)
    await page.click('text=Sign In');

    // Step 3: Ensure we are redirected to Autodesk's Auth0 page
    await page.waitForURL('https://accounts.autodesk.com/*');

    // Step 4: Fill in Auth0 (Autodesk) login form
    await page.getByRole('textbox', { name: 'Email text field' }).fill('amwell709@gmail.com');
    await page.getByRole('button', { name: 'Next button' }).click();
    await page.getByRole('textbox', { name: 'Password text field' }).fill('Qatestme123!');
    await page.getByRole('button', { name: 'Sign in button' }).click();
    // Click the login button

    // Step 5: Wait for redirect back to Autodesk
    await page.waitForURL('https://www.autodesk.com/*');

    // Step 6: Verify successful login
    await expect(page.locator('text=View report')).toBeVisible(); // Adjust based on UI

    // Step 7 (Optional): Save session storage for reuse in other tests
    //await context.storageState({ path: 'auth-autodesk.json' });
});
*/