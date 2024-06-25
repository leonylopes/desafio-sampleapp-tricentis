import enterVehicleData_elements from "../elements/enterVehicleData_elements";

const vehicleData = new enterVehicleData_elements;

const dados = require('../../fixtures/EnterVehicleData.json')

class vehicleData_Page {

    selectAutomobile(){
        cy.xpath(vehicleData.autoMobileMenu()).click();
    }

    preencherCampoMake() {
        cy.get(vehicleData.makeField()).should('exist').select(dados.makeField);
    };

    preencherCampoEnginePerformance(){
        cy.get(vehicleData.enginePerfomanceField()).should('exist').type(dados.enginePerfomanceField);
    }

    preencherCampoDateOfManufacture(){
        cy.get(vehicleData.dateOfManufactureField()).should('exist').type(dados.dateOfManufactureField);
    }

    preencherCampoNumberOfSeats(){
        cy.get(vehicleData.numberOfSeatsField()).should('exist').select(dados.numberOfSeatsField);
    }

    preencherCampoFuelType(){
        cy.get(vehicleData.fuelField()).should('exist').select(dados.fuelField);
    }

    preencherCampoListPrice(){
        cy.get(vehicleData.listPriceField()).should('exist').type(dados.listPriceField);
    }

    preencherCampoLicensePlateNumber(){
        cy.get(vehicleData.licensePlateNumberField()).should('exist').type(dados.licensePlateNumberField);
    }

    preencherCampoAnnualMileage(){
        cy.get(vehicleData.annualMileageField()).should('exist').type(dados.annualMileageField);
    }

    clicarBotaoNext(){
        cy.get(vehicleData.nextButton()).click();
    }


};

export default vehicleData_Page;