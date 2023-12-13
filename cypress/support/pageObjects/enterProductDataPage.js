import enterProductDataElements from "../elements/enterProductDataElements";

const productData = new enterProductDataElements;

const dados = require('../../fixtures/EnterProductData.json')

class productDataPO {

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

export default productDataPO;