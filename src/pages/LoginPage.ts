import {Page} from "@playwright/test";
import HomePage from "./HomePage";

export default class Login {
    private readonly usernameInputSelector = ""
    private readonly passwordInputSelector = ""
    private readonly loginButtonSelector = ""    

    constructor (private page: Page) {
        
    }

    async navigateToLoginPage() {
        //await this.page.goto('https://login.salesforce.com/');

        await this.page.goto(process.env.url!);
            
        await this.page.waitForTimeout(2000);

    }

    // async fillUsername (username: string) {
    //     await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    // }

    // async fillPassword (password: string) {
    //     await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    // }

    async clickLoginButton() {
        const homePage = new HomePage(this.page);
        return homePage;
    }

}