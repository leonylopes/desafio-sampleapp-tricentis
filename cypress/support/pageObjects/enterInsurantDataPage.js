import enterInsurantDataElements from "../elements/enterInsurantDataElements";

const insurantData = new enterInsurantDataElements;

const dados = require('../../fixtures/EnterInsurantData.json')

class insurantDataPO {

    preencherCampoFirstName(){
        cy.get(insurantData.firstNameField()).should('exist').type(dados.firstNameField);
    }

    preencherCampoLastName(){
        cy.get(insurantData.lastNameField()).should('exist').type(dados.lastNameField);
    }

    preencherCampoBirthDate(){
        cy.get(insurantData.birthdateField()).should('exist').type(dados.birthdateField);
    }

    preencherCampoGender(){
        cy.get(insurantData.genderField()).should('exist').click({ force: true }).should('be.checked');
    }

    preencherCampoCountry(){
        cy.get(insurantData.countryField()).should('exist').select(dados.countryField);
    }

    preencherCampoZipCode(){
        cy.get(insurantData.zipCodeField()).should('exist').type(dados.zipCodeField);
    }

    preencherCampoOccupation(){
        cy.get(insurantData.occupationField()).should('exist').select(dados.occupationField);
    }

    preencherCampoHobbies(){
        cy.get(insurantData.hobbiesField()).should('exist').click({ force: true }).should('be.checked');
    }

    clicarBotaoNext(){
        cy.get(insurantData.nextButton()).should('exist').click();
    }


};

export default insurantDataPO;