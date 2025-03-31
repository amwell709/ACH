import { Page, expect } from "@playwright/test";

export default class CommActs {

constructor(private page : Page) {
    this.page = page;
}

async getRandomName(){
    const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Grace", "John", "Lily", "Mike", "Nina","Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Clark"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    return `${randomFirstName}`;
}

}