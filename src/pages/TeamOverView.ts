import {Page, expect} from "@playwright/test";

export default class TeamOverView {

    constructor (private page: Page) {}          

    async clickTeamOverView() {       
        await this.page.getByRole('link', { name: 'Team Overview' }).click();    
    }

    async clickDefinedTab() {       
        await this.page.getByRole('link', { name: 'Defined' }).click();      
    }

    async clickDeliveriesTab() {       
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('link', { name: 'Deliveries' }).click();     
    }

    async clickCompletedCourseTab() {       
        await this.page.getByRole('link', { name: 'Courses Completed' }).click();     
    }

    async validationAccreditation() {       
        await expect(this.page.locator('h2').filter({ hasText: 'Accreditations' })).toBeVisible()
    }

    async validationDefinedServices() {       
        await expect(this.page.locator('h2').filter({ hasText: 'Partner Defined Services' })).toBeVisible();
    }

    async validationDeliveries() {       
        await this.page.waitForTimeout(1000)
        await expect(this.page.getByText('Most Deliveries By User')).toBeVisible();
    }
    async validationCompletedCourse() {       
        await expect(this.page.locator('h2').filter({ hasText: 'Courses Completed' })).toBeVisible();
    }

}

