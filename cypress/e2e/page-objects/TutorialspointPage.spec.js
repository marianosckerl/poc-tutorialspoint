/// <reference types ="cypress"/>

import { stateStore } from '../helper/helper';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class HomePage {

        selector_Iframe = '.result';

    enterURL(url) {
        cy.visit(url);
    }

    getURL() {
        cy.url().then((url) => {
            cy.log('Current URL is: ' + url);
            console.log('Current URL is: ' + url);
          })
    }

    getIframeURL2(iframe) {
        cy.get(iframe)
        .its('0.contentDocument')
        .its('body')
        .find('iframe')
        .invoke('attr', 'src').then((iframeSrc) => {
            cy.log('Current Iframe URL iss:', iframeSrc);
            console.log('Current Iframe URL iss:', iframeSrc);
        });
    }

    validateURL(url) {
       return cy.url().should("eq", url).wait(2000);
    }

    verifyPageTitle(title) {
        return cy.title().should('exist').should("eq", title).wait(2000);
    }

    getIframeURL(iframe) {
        cy.get(iframe)
            .should('be.visible')
            .invoke('attr', 'src')
            .then(src => {
                stateStore.relativeURL = src;
                console.log('Iframe url is: ' + src);
                cy.log('Iframe url is: ' + src);                  
            });
    }

    visitLinkIframe(iframe, item) {
        cy
        .get(iframe)
        .iframe()
        .find("iframe")
        .iframe()
        .find("a.nav-link.fw-bold")
        .contains(item)
        .click({force: true});
        }

    listComponent(iframe, item) {
        cy
        .get(iframe)
        .iframe()
        .find("iframe")
        .iframe()
        .get(item).each(element => {
            if (item == 'a') {
                if (element.prop('href')){
                    cy.log('URL = ' + element.prop('href'));
                    console.log('URL = ' + element.prop('href'));
                }
            }
            else{
                cy.log('Component = ' + element);
                console.log('Component = ' + element);
            }
            }).wait(2000);  
    }

    openLogin() {
        cy.wrap(Cypress.$('body > header > nav > div > div.navbar-nav.d-lg-inline-block.nav-login > a'))
        .invoke('attr', 'target', '_self')
        cy.get('body > header > nav > div > div.navbar-nav.d-lg-inline-block.nav-login > a').click().wait(3000);

    }
 
    loginUser(email, password) {
        cy.log('Email: ' + email);
        console.log('Email: ' + email);
        cy.log('Password: ' + password);
        console.log('Password: ' + password);
        cy.get('#user_email').should('be.visible').clear().type(email).wait(2000);
        cy.get('#user_password').should('be.visible').clear().type(password).wait(2000);
        cy.get('#user_login').should('be.visible').click();
    }

    skipModalMobileVerification() {
        cy.get('#skipMobileOtp')
        .should('be.visible')
        .wait(2000)
        .click();
    }

    userLogged(name) {
        cy.get('#profileMenu').should('be.visible').click().wait(3000);
        return cy.get('.name').should('have.text', name);
    }

    logout() {
        cy.get('.logout').should('be.visible').click().wait(2000);
    }

}

const homepage = new HomePage();
export default homepage;