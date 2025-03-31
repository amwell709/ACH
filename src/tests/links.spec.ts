import { test, expect } from '@playwright/test';
import checkLinks from "../pages/checkLinks";

// test('Admin ', async ({ page }) => {
//   await page.goto(process.env.urlUser!);
//   const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
  
//   console.log(`Found ${links.length} links.`);

//   for (const link of links) {
//       try {
//           const response = await page.goto(link);
//           if (response.status() === 200) {
//               console.log(`✅ ${link} is valid.`);
//           } else {
//               console.log(`❌ ${link} returned status: ${response.status()}`);
//           }
//       } catch (error) {
//           console.log(`❌ Error accessing ${link}: ${error.message}`);
//       }
//       await page.waitForTimeout(3000);  
//   } 
 
// })    

test('Admin ', async ({ page }) => {
  await page.goto(process.env.urlAdmin!);
  const _checklinks = new checkLinks();
  await _checklinks.links(page);
 
})    
  