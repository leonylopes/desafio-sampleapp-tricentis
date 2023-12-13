import {Given as Dado, When as Quando, Then as Entao } from "cypress-cucumber-preprocessor/steps";
import vehicleDataPO from "../pageObjects/enterVehicleDataPage";
import insurantDataPO from "../pageObjects/enterInsurantDataPage";
import productDataPO from "../pageObjects/enterProductDataPage";
import selectOptionPO from "../pageObjects/selectPriceOptionPage";
import sendQuotePO from "../pageObjects/sendQuotePage";

const url = Cypress.config('baseUrlAutomationInsurance');

const vehicleData = new vehicleDataPO;
const insurantData = new insurantDataPO;
const productData = new productDataPO;
const selectOption = new selectOptionPO;
const sendQuote = new sendQuotePO;


Dado('que eu esteja na página Automobile Insurance', () => {
    cy.visit(url);
});

Quando('preencho o formulário Enter Vehicle Data', () => {
    vehicleData.selectAutomobile();
    vehicleData.preencherCampoMake();
    vehicleData.preencherCampoEnginePerformance();
    vehicleData.preencherCampoDateOfManufacture();
    vehicleData.preencherCampoNumberOfSeats();
    vehicleData.preencherCampoFuelType();
    vehicleData.preencherCampoListPrice();
    vehicleData.preencherCampoLicensePlateNumber();
    vehicleData.preencherCampoAnnualMileage();
    vehicleData.clicarBotaoNext();
});

Quando('preencho o formulário Enter Insurant Data', () => {
    insurantData.preencherCampoFirstName();
    insurantData.preencherCampoLastName();
    insurantData.preencherCampoBirthDate();
    insurantData.preencherCampoGender();
    insurantData.preencherCampoCountry();
    insurantData.preencherCampoZipCode();
    insurantData.preencherCampoOccupation();
    insurantData.preencherCampoHobbies();
    insurantData.clicarBotaoNext();
});

Quando('preencho o formulário Enter Product Data', () => {
    productData.preencherCampoStartDate();
    productData.preencherCampoInsuranceSum();
    productData.preencherCampoMeritRating();
    productData.preencherCampoDamageInsurance();
    productData.preencherCampoOptionalProducts();
    productData.preencherCampoCourtesyCar();
    productData.clicarBotaoNext();
});


Quando('seleciono a opção desejada clicando no botão Next', () => {
    selectOption.selecionarPriceOption();
    selectOption.clicarBotaoNext();
});

Quando('preencho o formulário Send Quote clicando no botão Send', () => {
    sendQuote.preencherCampoEmail();
    sendQuote.preencherCampoPhone();
    sendQuote.preencherCampoUserName();
    sendQuote.preencherCampoPassword();
    sendQuote.preencherCampoConfirmPassword();
    sendQuote.clicarBotaoSend();
});

Entao('devo validar a mensagem {string} exibida na tela', (string) => {
    sendQuote.validarMensagemSucesso(string);
});