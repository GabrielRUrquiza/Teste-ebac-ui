/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

beforeEach(() => {
    produtosPage.visitarUrl()
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
            produtosPage.buscarProdutoLista('Abominable Hoodie')
            cy.get('#tab-title-additional_information > a').should('contain', 'Informação adicional')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain',produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain','Aero Daily Fitness Tee')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7 
        produtosPage.buscarProduto('Augusta Pullover Jacket')
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Augusta Pullover Jacket” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => { 
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
    });

});