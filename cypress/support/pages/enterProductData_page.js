import enterProductData_elements from "../elements/enterProductData_elements";

const productData = new enterProductData_elements;

const dados = require('../../fixtures/EnterProductData.json')

class productData_Page {

    preencherCampoStartDate(){
        cy.get(productData.startDateField()).should('exist').type(dados.startDateField);
    }

    preencherCampoInsuranceSum(){
        cy.get(productData.insuranceSumField()).should('exist').select(dados.insuranceSumField);
    }

    preencherCampoMeritRating(){
        cy.get(productData.meritRatingField()).should('exist').select(dados.meritRatingField);
    }

    preencherCampoDamageInsurance(){
        cy.get(productData.damageInsuranceField()).should('exist').select(dados.damageInsuranceField);

    }

    preencherCampoOptionalProducts(){
        cy.get(productData.optionalProductsField()).should('exist').click({ force: true }).should('be.checked');
    }

    preencherCampoCourtesyCar(){
        cy.get(productData.courtesyCarField()).should('exist').select(dados.courtesyCarField);

    }

    clicarBotaoNext(){
        cy.get(productData.nextButton()).should('exist').click();
    }


};

export default productData_Page;