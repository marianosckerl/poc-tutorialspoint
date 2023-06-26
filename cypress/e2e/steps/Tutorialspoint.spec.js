/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../page-objects/TutorialspointPage.spec";
import { stateStore } from '../helper/helper';


beforeEach(() => {
    cy.viewport(1600, 720);
});

Given("I navigate to the Website {string}", (url) => {
    cy.log('Navigating to: ' + url);
    homePage.enterURL(url);
});

Then("Validate the page title", (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.log('Page Title: ' + element.title);
        console.log('Page Title: ' + element.title);
        homePage.verifyPageTitle(element.title);
    });
});

Then("Visit the {string} link", (linkName) => {
    cy.log('Visiting link: ' + linkName);
    homePage.visitLink(linkName);
});

Then("Get the current URL", () => {
    homePage.getURL();
});

Then("Get current Iframe URL", () => {
    homePage.getIframeURL2('.result');  
});

Then("Current URL page should be {string}", (url) => {
    cy.log('Validating url to match with: ' + url);
    homePage.validateURL(url);
});

Given("Get the Iframe URL", () => {
    cy.log('Getting the Iframe URL');
    homePage.getIframeURL('.result');
});

Then("Visit the {string} link inside the Iframe", (item) => {
    cy.log('Visiting the Iframe : ' + stateStore.relativeURL);
    homePage.visitLinkIframe('.result', item);
});

Then("Visit the iframe src", () => {
    cy.log('Visiting the Iframe SRC: ' + stateStore.relativeURL);
    homePage.enterURL(stateStore.relativeURL);
});

Then("List all the URLs", () => {
    cy.log('List of url on page ...');
    homePage.listComponent('.result','a');
});

Then("List all the Buttons", () => {
    cy.log('List of buttons component on page ...');
    homePage.listComponent('.result','button');
});

Then("List all the Input fields", () => {
    cy.log('List of Input fields on page ...');
    homePage.listComponent('.result','input');
});

When("Open the login page", () => {
    cy.log('Opening the login page ...');
    homePage.openLogin();
});

When("Uses the user credentials", (datatable) => {
    cy.log('Entering credentials for: ');
    datatable.hashes().forEach((element) => {
        cy.log('User: ' + element.email);
        homePage.loginUser(element.email, element.password);
    });
});

When("Skip mobile number verification", () => {
    cy.log('Skipping mobile number verification ...');
    homePage.skipModalMobileVerification();
});

Then("Validate that the user is registered", (datatable) => {
    cy.log('Validating user name ...');
    datatable.hashes().forEach((element) => {
        console.log('Name: ' + element.name);
        homePage.userLogged(element.name);
    });
});

When("User logout", () => {
    cy.log('Logout user ...');
    homePage.logout();
});