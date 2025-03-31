import {Page} from "@playwright/test";
import HomePage from "./HomePage";

export default class checkURL {

    async links(page) {
        const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
  
        console.log(`Found ${links.length} links.`);
      
        for (const link of links) {
            try {
                const response = await page.goto(link);
                if (response.status() === 200) {
                    console.log(`✅ ${link} is valid.`);
                } else {
                    console.log(`❌ ${link} returned status: ${response.status()}`);
                }
            } catch (error) {
                console.log(`❌ Error accessing ${link}: ${error.message}`);
            }
            await page.waitForTimeout(1000);
        } 
    }

}