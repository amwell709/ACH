import { Page, expect } from "@playwright/test";

export default class CommActs {

constructor(private page : Page) {
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

}