import ReconElements from "../../support/elements/pageElements"

const url = Cypress.config('baseUrl');
const pageElements = new ReconElements



it("visitar pagina do Recon", () => {
    cy.visit(url);
    cy.get(pageElements.botaoStartLogin()).click();
    cy.get(pageElements.botaoUserName()).type("VBARBOSA");
    cy.get(pageElements.botaoUserPssw()).type("28041991");
    cy.contains('Login').click();
    cy.get('#clients-view')
    cy.get(pageElements.framePrincipal()).scrollTo("top", { duration: 2000, easing: 'swing' })
});