import selectOption_elements from "../elements/selectPriceOption_elements";

const selectOption = new selectOption_elements;


class selectOption_Page {

    selecionarPriceOption(){
        cy.get(selectOption.priceOptionField()).should('exist').click({ force: true }).should('be.checked');
    }

    clicarBotaoNext(){
        cy.get(selectOption.nextButton()).should('exist').click();
    }

};

export default selectOption_Page;