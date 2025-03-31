import {Page, expect} from "@playwright/test";

export default class CommonActions {

    constructor (private page: Page) {
        this.page = page;
    }          

    async clickTab(selector) {    

        await this.page.click(selector);
    }

    async fill(selector, text) {    

        await this.page.fill(selector, text);
    }

    async getText(selector) {       
        return await this.page.textContent(selector)
    }

    async isChecked(selector) {       
        return await this.page.isChecked(selector)
    }

    async getRandomName(){
        // const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Grace", "John", "Lily", "Mike", "Nina","Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Clark"];
        // const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];

        const randomText = Math.random().toString(36).substring(7);
        //return `${randomFirstName}`;
        return `${randomText}`;
    }

}