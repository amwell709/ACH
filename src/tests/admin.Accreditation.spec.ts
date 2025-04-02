import { test, expect } from '@playwright/test';
import Accreditation from "../pages/Accreditation";
import GenRandom from '../utils/GenRandom';

var _accreditation;
var _gen;

test.describe('Accreditation', () => {

    test.beforeEach(async ({ page }) => {
        _accreditation = new Accreditation(page);
        _gen = new GenRandom()
        await page.goto(process.env.urlAdmin!);
        await _accreditation.clickAccreditationTab();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    // Description: click the overview title, validate launch to the correct page
    test('Overview', async ({ page }) => {
        await _accreditation.clickAccreditationOverView()
        await _accreditation.validationAccreditationOverView()
    });


    // Description: click the Optimize Accelerator title, validate launch to the correct page
    test('Optimize Accelerator page', async ({ page }) => {
        await _accreditation.clickOptimizeTab()
        await _accreditation.validationAccreditationOpimize()
    });

    // Description: click the Skill title, validate launch to the correct page
    test('Skill page', async ({ page }) => {
        await _accreditation.clickSkillTab()
        await _accreditation.validationAccreditationSkill();
    });

    // Description: click the Techincal Capablility title, validate launch to the correct page
    test('Techincal Capablility page', async ({ page }) => {
        await _accreditation.clickTechnicalCapabilityTab()
        await _accreditation.validationAccreditationTechnical()
    });

    // Description: click the Partner defined title, validate launch to the correct page
    test('Partner defined page', async ({ page }) => {
        await _accreditation.clickPartnerDefinedTab();
        await _accreditation.validationAccreditationPartnerDefine()
    });

    // Description: click the Accreditation title, validate launch to the correct page
    test('My Accreditation page', async ({ page }) => {
        await _accreditation.clickMyAccreditationsTab();
        await _accreditation.validationMyAccreditation()
    })

    // Description: click the Optimize Accelerator Read more, validate launch to the correct page
    test('Optimize Accelerator page - click read more', async ({ page }) => {
        await _accreditation.clickOptimizeReadMore()
        await _accreditation.validationAccreditationOpimize()
    });

    // Description: click the Skill Read more, validate launch to the correct page
    test('Skill page - click read more', async ({ page }) => {
        await _accreditation.clickSkillReadMore()
        await _accreditation.validationAccreditationSkill();
    });

    // Description: click the Techincal Capablility Read more, validate launch to the correct page
    test('Techincal Capablility page - click read more', async ({ page }) => {

        await _accreditation.clickTechnicalCapabilityReadMore()
        await _accreditation.validationAccreditationTechnical()
    });

    // Description: click the Partner defined Read more, validate launch to the correct page
    test('Partner defined page - click read more', async ({ page }) => {
        await _accreditation.clickPartnerDefinedReadMore();
        await _accreditation.validationAccreditationPartnerDefine()
    });

    // Description: to validate successful submit defined service accreditation
    test.only('Partner service definition ', async ({ page }) => {
        await _accreditation.clickPartnerDefinedTab();
        await _accreditation.validationAccreditationPartnerDefine()
        await _accreditation.clickPartnerDefineService()
        const engagementLength = await(_gen.getRandomNumber());
        await _accreditation.fillOutServiceDefinitionForm(engagementLength)
        await _accreditation.submitPartnerDefineService()
        await _accreditation.validationPartnerDefineService()

    });
 
    //Description: to validate required fields on partner defined service form
    test('Partner service definition form validation', async ({ page }) => {
        await _accreditation.clickPartnerDefinedTab();
        await _accreditation.validationAccreditationPartnerDefine()
        await _accreditation.clickPartnerDefineService()
        const engagementLength = await(_gen.getRandomNumber());
        await _accreditation.missedRequiredInfoServiceDefinitionForm(engagementLength)
        await _accreditation.submitPartnerDefineService()
        await _accreditation.validationPartnerDefineServiceForm()
    });

});





