import {Page, expect} from "@playwright/test";
import { randomInt } from 'crypto';
import path from 'path';

export default class GenRandom {


    async getRandomName(){
        const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Grace", "John", "Lily", "Mike", "Nina","Smith", "Johnson", 
                      "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Clark", "Tommy", "Tim", "Michael",
                      "Mich", "Peter", "Ron", "Bruce", "Jeff", "Mary", "Rocky", "Carson", "Lily", "Christin", "Lisa"];
        const randomFirstName = names[Math.floor(Math.random() * names.length)];
        return `${randomFirstName}`;
    }

    async getRandomNumber(){
        var num = randomInt(1, 99).toString()
        return `${num}`;
    }

    async testReport(){
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const reportFolder = path.join(__dirname, `playwright-reports/report-${timestamp}`).toString();
        return `${reportFolder}`;

    }
}