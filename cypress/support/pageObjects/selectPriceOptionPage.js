import selectOptionElements from "../elements/selectPriceOptionElements";

const selectOption = new selectOptionElements;


class selectOptionPO {

    selecionarPriceOption(){
        cy.get(selectOption.priceOptionField()).should('exist').click({ force: true }).should('be.checked');
    }

    clicarBotaoNext(){
        cy.get(selectOption.nextButton()).should('exist').click();
    }

};

export default selectOptionPO;