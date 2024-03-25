/// <reference types="cypress" />

describe('Challengig Dom', () => {
    beforeEach('Visite a página Challengig Dom', () => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom') 
        cy.get('h3').should('have.text', 'Challenging DOM')
      })

    it('Validar todos os botões "edit"', ()=> {        
        cy.get('[href="#edit"]')
            .should('have.length', 10)
            .each(function($edit){
            cy.wrap($edit).click()
            cy.url().should('include', 'https://the-internet.herokuapp.com/challenging_dom#edit');
        })   
    })

    it('Validar todos os botões "delete"', ()=> {        
        cy.get('[href="#delete"]')
            .should('have.length', 10)
            .each(function($delete){
            cy.wrap($delete).click()
            cy.url().should('include', 'https://the-internet.herokuapp.com/challenging_dom#delete');
        })   
    })
})