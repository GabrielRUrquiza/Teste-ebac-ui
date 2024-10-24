/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit ('produtos')
});

describe('Funcionalidade: Produtos', () => {
    
    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            .first()
            .click()
            cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            .last()
            .click()
            cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            .eq(2)
            .click()
            cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            .contains('Aero Daily Fitness Tee')
            .click()
            cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });

});