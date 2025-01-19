import sendQuote_elements from "../elements/sendQuote_elements";

const sendQuote = new sendQuote_elements;

const dados = require('../../fixtures/SendQuote.json')

class sendQuote_Page {

    preencherCampoEmail(){
        cy.get(sendQuote.emailField()).should('exist').type(dados.emailField);
    }

    preencherCampoPhone(){
        cy.get(sendQuote.phoneField()).should('exist').type(dados.phoneField);
    }

    preencherCampoUserName(){
        cy.get(sendQuote.usernameField()).should('exist').type(dados.usernameField)
    }

    preencherCampoPassword(){
        cy.get(sendQuote.passwordField()).should('exist').type(dados.passwordField);
    }

    preencherCampoConfirmPassword(){
        cy.get(sendQuote.confirmPasswordField()).should('exist').type(dados.confirmPasswordField);
    }

    clicarBotaoSend(){
        cy.get(sendQuote.sendButton()).should('exist').click();
    }

    validarMensagemSucesso(){
        cy.intercept({
            url: '**/101/tcpdf/pdfs/quote.php',
            method: 'POST'
        }).as('sentQuote');
        cy.wait('@sentQuote', {timeout: 10000}).its('response.statusCode').should('eq', 200);
        cy.xpath(sendQuote.successMessage()).should('exist').should('contain', dados.successMessage);
    }


};

export default sendQuote_Page;