export function _beforEeach() {
    cy.wait(1000)
  cy.visit('https://rapsodo.com/' , { failOnStatusCode: false })
  cy.wait(1000)
}

