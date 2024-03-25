/// <reference types="cypress" />

describe('Challengig Dom', () => {
    beforeEach('Visite a página Challengig Dom', () => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom') 
        cy.get('h3').should('have.text', 'Challenging DOM')
      })

    it('Validar o botão azul', ()=> {     
        cy.get('.button')
        .eq(0)    
        .click()
    })

    it('Validar o botão vermelho', ()=> {
        cy.get('.button')
        .eq(1)    
        .click()
    })

    it('Validar o botão verde', ()=> {     
        cy.get('.button')
        .eq(2)    
        .click()
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