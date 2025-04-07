import { test, expect } from '@playwright/test';
import TeamOverView from '../pages/TeamOverView';


var _teamOverView

test.describe('Team Over View', ()=> {

    test.beforeEach(async ({page}) => {
        _teamOverView = new TeamOverView(page);
        await page.goto(process.env.urlAdmin!);  
        await _teamOverView.clickTeamOverView();
    } )

    test.afterEach (async ({page}) => {
        await page.close();
    })

    test('Acceditation page', async ({ page }) => { 
         await _teamOverView.validationAccreditation();
     });


     test('Defined page', async ({ page }) => {          
        await _teamOverView.clickDefinedTab();
        await _teamOverView.validationDefinedServices();
     });


     test('Deliveries page', async ({ page }) => {         
        //await _teamOverView.clickTeamOverView(); 
        var _teamOverView = new TeamOverView(page);
        await _teamOverView.clickDeliveriesTab();
        await _teamOverView.validationDeliveries()
     });


     test('Courses Completed page', async ({ page }) => {          
        await _teamOverView.clickCompletedCourseTab();
        await _teamOverView.validationCompletedCourse();
     });
     
})

