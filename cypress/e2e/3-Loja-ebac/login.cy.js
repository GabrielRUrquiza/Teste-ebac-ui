/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
       cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('gabrielrodrigues2223@hotmail.com')
       cy.get('#password').type('030599gu@')
       cy.get('.woocommerce-form > .button').click()

       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gabrielrodrigues2223')
    })
})