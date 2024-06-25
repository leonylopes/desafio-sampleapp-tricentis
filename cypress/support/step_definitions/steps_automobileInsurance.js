import {Given as Dado, When as Quando, Then as Entao } from "cypress-cucumber-preprocessor/steps";
import vehicleData_Page from "../page_objects/enterVehicleData_page";
import insurantData_Page from "../page_objects/enterInsurantData_page";
import productData_Page from "../page_objects/enterProductData_page";
import selectOption_Page from "../page_objects/selectPriceOption_page";
import sendQuote_Page from "../page_objects/sendQuote_page";

const url = Cypress.config('baseUrlAutomationInsurance');

const vehicleData = new vehicleData_Page;
const insurantData = new insurantData_Page;
const productData = new productData_Page;
const selectOption = new selectOption_Page;
const sendQuote = new sendQuote_Page;


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

Entao('devo validar a mensagem de sucesso exibida na tela', () => {
    sendQuote.validarMensagemSucesso();
});