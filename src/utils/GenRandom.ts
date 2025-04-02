import {Page, expect} from "@playwright/test";
import { randomInt } from 'crypto';

export default class GenRandom {


    async getRandomName(){
        const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Grace", "John", "Lily", "Mike", "Nina","Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Clark"];
        const randomFirstName = names[Math.floor(Math.random() * names.length)];
        return `${randomFirstName}`;
    }

    async getRandomNumber(){
        var num = randomInt(1, 99).toString()
        return `${num}`;
    }
}